window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  initializeTranslation('en', '');

/*Custom Language Usage example:

Syntax: initializeTranslation('CourseLanguage', 'Language1, Language2','Language3');
Example: initializeTranslation('en', 'es,fr,de,it,ja,ko,ru,zh-CN');

Language Short Codes:
Afrikaans: af, Albanian: sq, Amharic: am, Arabic: ar, Armenian: hy, Azerbaijani: az, Basque: eu, Belarusian: be, Bengali: bn, Bosnian: bs, Bulgarian: bg, Catalan: ca, Cebuano: ceb, Chichewa: ny, Chinese (Simplified): zh-CN, Chinese (Traditional): zh-TW, Corsican: co, Croatian: hr, Czech: cs, Danish: da, Dutch: nl, English: en, Esperanto: eo, Estonian: et, Filipino: tl, Finnish: fi, French: fr, Frisian: fy, Galician: gl, Georgian: ka, German: de, Greek: el, Gujarati: gu, Haitian Creole: ht, Hausa: ha, Hawaiian: haw, Hebrew: he, Hindi: hi, Hmong: hmn, Hungarian: hu, Icelandic: is, Igbo: ig, Indonesian: id, Irish: ga, Italian: it, Japanese: ja, Javanese: jw, Kannada: kn, Kazakh: kk, Khmer: km, Kinyarwanda: rw, Korean: ko, Kurdish (Kurmanji): ku, Kyrgyz: ky, Lao: lo, Latin: la, Latvian: lv, Lithuanian: lt, Luxembourgish: lb, Macedonian: mk, Malagasy: mg, Malay: ms, Malayalam: ml, Maltese: mt, Maori: mi, Marathi: mr, Mongolian: mn, Myanmar (Burmese): my, Nepali: ne, Norwegian: no, Odia (Oriya): or, Pashto: ps, Persian: fa, Polish: pl, Portuguese: pt, Punjabi: pa, Romanian: ro, Russian: ru, Samoan: sm, Scots Gaelic: gd, Serbian: sr, Sesotho: st, Shona: sn, Sindhi: sd, Sinhala: si, Slovak: sk, Slovenian: sl, Somali: so, Spanish: es, Sundanese: su, Swahili: sw, Swedish: sv, Tajik: tg, Tamil: ta, Tatar: tt, Telugu: te, Thai: th, Turkish: tr, Turkmen: tk, Ukrainian: uk, Urdu: ur, Uyghur: ug, Uzbek: uz, Vietnamese: vi, Welsh: cy, Xhosa: xh, Yiddish: yi, Yoruba: yo, Zulu: zu

*/


function addCssToHead(cssRules) {
    var styleElement = document.createElement('style');
    styleElement.textContent = cssRules;
    document.head.appendChild(styleElement);
}

var css = `
    iframe[id=":1.container"] {
        display: none !important;
    }
    body {
        top: 0 !important;
        overflow: auto !important;
    }
    .goog-logo-link {
        display: none !important;
    }
    .goog-te-gadget {
        color: transparent !important;
    }
    .VIpgJd-ZVi9od-l4eHX-hSRGPd {
        display: none;
    }
    #goog-gt-tt #goog-gt-vt {
        display: none !important;
    }
    .VIpgJd-ZVi9od-aZ2wEe-wOHMyf.VIpgJd-ZVi9od-aZ2wEe-wOHMyf-ti6hGc {
        display: none !important;
    }
`;
addCssToHead(css);
function createGoogleTranslateWidget(pageLanguage, includedLanguages) {
    const translateDiv = document.createElement('div');
    translateDiv.id = 'google_translate_element';

    const targetDiv = document.querySelector('.slide-window-slide-container');

    if (targetDiv) {
        targetDiv.parentNode.insertBefore(translateDiv, targetDiv);
    } else {
        document.body.appendChild(translateDiv);
    }

    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script1);

    if (!window.googleTranslateElementInit) {
        window.googleTranslateElementInit = function() {
            new google.translate.TranslateElement({
                pageLanguage: pageLanguage,
                includedLanguages: includedLanguages,
                layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
            }, 'google_translate_element');
        }
    }
}



function initializeTranslation(pageLanguage, includedLanguages) {
    if (!document.getElementById('google_translate_element')) {
        createGoogleTranslateWidget(pageLanguage, includedLanguages);
    }
}



}

};
