(function(r){function n(l,s){return RegExp(l.replace(/<MOD>/g,function(){return`(?:\\([^|()
]+\\)|\\[[^\\]
]+\\]|\\{[^}
]+\\})`}).replace(/<PAR>/g,function(){return`(?:\\)|\\((?![^|()
]+\\)))`}),s||"")}var t={css:{pattern:/\{[^{}]+\}/,inside:{rest:r.languages.css}},"class-id":{pattern:/(\()[^()]+(?=\))/,lookbehind:!0,alias:"attr-value"},lang:{pattern:/(\[)[^\[\]]+(?=\])/,lookbehind:!0,alias:"attr-value"},punctuation:/[\\\/]\d+|\S/},d=r.languages.textile=r.languages.extend("markup",{phrase:{pattern:/(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,lookbehind:!0,inside:{"block-tag":{pattern:n("^[a-z]\\w*(?:<MOD>|<PAR>|[<>=])*\\."),inside:{modifier:{pattern:n("(^[a-z]\\w*)(?:<MOD>|<PAR>|[<>=])+(?=\\.)"),lookbehind:!0,inside:t},tag:/^[a-z]\w*/,punctuation:/\.$/}},list:{pattern:n("^[*#]+<MOD>*\\s+\\S.*","m"),inside:{modifier:{pattern:n("(^[*#]+)<MOD>+"),lookbehind:!0,inside:t},punctuation:/^[*#]+/}},table:{pattern:n("^(?:(?:<MOD>|<PAR>|[<>=^~])+\\.\\s*)?(?:\\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+\\.|(?!(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+\\.))[^|]*)+\\|","m"),inside:{modifier:{pattern:n(`(^|\\|(?:\r?
|\r)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+(?=\\.)`),lookbehind:!0,inside:t},punctuation:/\||^\./}},inline:{pattern:n("(^|[^a-zA-Z\\d])(\\*\\*|__|\\?\\?|[*_%@+\\-^~])<MOD>*.+?\\2(?![a-zA-Z\\d])"),lookbehind:!0,inside:{bold:{pattern:n("(^(\\*\\*?)<MOD>*).+?(?=\\2)"),lookbehind:!0},italic:{pattern:n("(^(__?)<MOD>*).+?(?=\\2)"),lookbehind:!0},cite:{pattern:n("(^\\?\\?<MOD>*).+?(?=\\?\\?)"),lookbehind:!0,alias:"string"},code:{pattern:n("(^@<MOD>*).+?(?=@)"),lookbehind:!0,alias:"keyword"},inserted:{pattern:n("(^\\+<MOD>*).+?(?=\\+)"),lookbehind:!0},deleted:{pattern:n("(^-<MOD>*).+?(?=-)"),lookbehind:!0},span:{pattern:n("(^%<MOD>*).+?(?=%)"),lookbehind:!0},modifier:{pattern:n("(^\\*\\*|__|\\?\\?|[*_%@+\\-^~])<MOD>+"),lookbehind:!0,inside:t},punctuation:/[*_%?@+\-^~]+/}},"link-ref":{pattern:/^\[[^\]]+\]\S+$/m,inside:{string:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0},url:{pattern:/(^\])\S+$/,lookbehind:!0},punctuation:/[\[\]]/}},link:{pattern:n('"<MOD>*[^"]+":.+?(?=[^\\w/]?(?:\\s|$))'),inside:{text:{pattern:n('(^"<MOD>*)[^"]+(?=")'),lookbehind:!0},modifier:{pattern:n('(^")<MOD>+'),lookbehind:!0,inside:t},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[":]/}},image:{pattern:n("!(?:<MOD>|<PAR>|[<>=])*(?![<>=])[^!\\s()]+(?:\\([^)]+\\))?!(?::.+?(?=[^\\w/]?(?:\\s|$)))?"),inside:{source:{pattern:n("(^!(?:<MOD>|<PAR>|[<>=])*)(?![<>=])[^!\\s()]+(?:\\([^)]+\\))?(?=!)"),lookbehind:!0,alias:"url"},modifier:{pattern:n("(^!)(?:<MOD>|<PAR>|[<>=])+"),lookbehind:!0,inside:t},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[!:]/}},footnote:{pattern:/\b\[\d+\]/,alias:"comment",inside:{punctuation:/\[|\]/}},acronym:{pattern:/\b[A-Z\d]+\([^)]+\)/,inside:{comment:{pattern:/(\()[^()]+(?=\))/,lookbehind:!0},punctuation:/[()]/}},mark:{pattern:/\b\((?:C|R|TM)\)/,alias:"comment",inside:{punctuation:/[()]/}}}}}),i=d.phrase.inside,e={inline:i.inline,link:i.link,image:i.image,footnote:i.footnote,acronym:i.acronym,mark:i.mark};d.tag.pattern=/<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;var o=i.inline.inside;o.bold.inside=e,o.italic.inside=e,o.inserted.inside=e,o.deleted.inside=e,o.span.inside=e;var a=i.table.inside;a.inline=e.inline,a.link=e.link,a.image=e.image,a.footnote=e.footnote,a.acronym=e.acronym,a.mark=e.mark})(Prism);
