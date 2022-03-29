window.android_url='https://汤圆IMfile3.azureedge.net/download/汤圆IM-im.1.2.41.apk';
window.ios_url='itms-apps://itunes.apple.com/app/id1374264186';
function gotoDownload(type) {

	if (type == 'android') {
		url = window.android_url;
	} else {
		url = window.ios_url
	}


	location.href=url;
}
