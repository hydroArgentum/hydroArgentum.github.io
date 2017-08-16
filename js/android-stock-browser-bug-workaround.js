/*
 * This is a workaround for select elements issue with Android stock browsers.
 * Please find this script from the Bootstrap website.
 * All credit goes to Bootstrap team for providing this workaround.
 */

(function () {
  var nua = navigator.userAgent
  var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
  if (isAndroid) {
    $('select.form-control').removeClass('form-control').css('width', '100%')
  }
})
