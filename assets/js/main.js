$(document).ready(function(){
	if($('#nav-elements').length){
		var	$this	= $('#nav-elements');
			url		= window.location.href.split('/');
			link 	= url[url.length - 1];
			hrefs 	= $this.children('li').children('a');
		hrefs.each(function(){
			var $this	= $(this);
				href 	= $this.attr('href');
			while(href === link){
				$this.addClass('color-primary fw-600');
				break;
			}
		});
	}
})

$(document).ready(function(){
	// var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	// var isFirefox = typeof InstallTrigger !== 'undefined';
	// var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	var isEdge = !isIE && !!window.StyleMedia;
	// var isChrome = !!window.chrome && !!window.chrome.webstore;
	// var isBlink = (isChrome || isOpera) && !!window.CSS;

	if(isIE) $('html').addClass("ie");
	if(isEdge) $('html').addClass("edge");
    
})


// bootstrap's official fix for ie 
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.head.appendChild(msViewportStyle)
}