
;/**
 * this function is to check Browser
 * if IE,it will return IE version
 * @returns
 * {
 *   "isIE": true,
 *   "fIEVersion": 8
 * }
 */
var checkBrowser = function() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    var isChrome = userAgent.indexOf("Chrome") > -1; //判断是否Firefox浏览器
    var isSafari = userAgent.indexOf("Safari") > -1; //判断是否Safari浏览器
    var fIEVersion = '';
    if (isIE) {
        var IE5 = IE55 = IE6 = IE7 = IE8 = false;
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        fIEVersion = parseFloat(RegExp["$1"]);

    } //isIE end
    return {
        "isIE": isIE,
        "fIEVersion": fIEVersion
    }
}

module.exports = checkBrowser;