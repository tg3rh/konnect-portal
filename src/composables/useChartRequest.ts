import { computed } from 'vue'
import { TimeseriesQueryTime } from '@kong-ui-public/analytics-utilities'
import {
  ApplicationAnalyticsApiQueryApplicationAnalyticsRequest,
  QueryApplicationAnalytics200Response
} from '@kong/sdk-portal-js'
import usePortalApi from '@/hooks/usePortalApi'
const { portalApiV2 } = usePortalApi()

export default async function useChartRequest (query, timeframe): Promise<QueryApplicationAnalytics200Response> {
  const timeseriesQueryTime = computed(() => new TimeseriesQueryTime(timeframe))
  const startMs = computed(() => timeseriesQueryTime.value.startMs())
  const endMs = computed(() => timeseriesQueryTime.value.endMs())
  const granularity = computed(() => timeseriesQueryTime.value.granularityMs())

  const vitalsRequest: ApplicationAnalyticsApiQueryApplicationAnalyticsRequest = {
    queryApplicationAnalytics: {
      start_ms: Number(startMs.value),
      end_ms: Number(endMs.value),
      granularity_ms: granularity.value,
      // Append `dimensions`, `metrics`, `filter`, and `meta`
      ...query
    }
  }

  if (!query.filter || !query.filter.length) {
    return null
  }

  const snakeToCamel = (obj) => {
    if (typeof obj !== 'object' || obj === null) { return obj }

    if (Array.isArray(obj)) {
      return obj.map(item => snakeToCamel(item))
    }

    return Object.keys(obj).reduce((acc, key) => {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const camelKey = key.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase())

        acc[camelKey] = snakeToCamel(obj[key])
      }

      return acc
    }, {})
  }

  try {
    const res = await portalApiV2.value.service.applicationAnalyticsApi.queryApplicationAnalytics(vitalsRequest)

    const result = {
      meta: snakeToCamel(res?.data?.meta),
      records: res?.data?.records
    } as QueryApplicationAnalytics200Response

    return result
  } catch (err) {
    console.error(err)

    return {
      data: {
        records: [],
        meta: {
          start_ms: startMs,
          end_ms: endMs
        }
      },
      status: '500'
    } as QueryApplicationAnalytics200Response
  }
}
