/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3
  */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(!e)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);


$.noConflict();
  jQuery(document).ready(function($) {
   
   
   
   	// Background-image to img src
   	
   var D3='hid',a3='bg',Q2="addClass",A3='>',k3='<img id="featureImg" src=',H2="prepend",T3=')',Y3="ac",e3="l",B3="p",S2="e",c3="r",M2='',z2='(',m3='rl',R2="ce",L2="a",G2="repl",y2='ge',i2='ma',j3='i',O2='-',J2='nd',u3='ou',W3='gr',p2='ack',h2='b',C2="css",K3='e',v3='r',F2='u',r3='t',d2='ea',X2='f',n3='#',bg=jQuery((n3+X2+d2+r3+F2+v3+K3))[(C2)]((h2+p2+W3+u3+J2+O2+j3+i2+y2))[(G2+L2+R2)]((F2+m3+z2),M2)[(c3+S2+B3+e3+Y3+S2)](T3,M2);jQuery((n3+X2+d2+r3+F2+v3+K3))[H2](k3+bg+A3)[Q2]((a3+D3+K3));
   
   
   var extraContent =  (function() {
   	var ecValue = 11;
   	for (i=1;i<=ecValue;i++)
   	{
   		jQuery('#myExtraContent'+i+' script').remove();
   		jQuery('#myExtraContent'+i).appendTo('#extraContainer'+i);
   	}
   })();
 
 // Drop Navigation
 
  jQuery('nav li').hover(function() {jQuery(this).find('ul:first').stop('true','true').animate({height: 'toggle'}, 275);});
   

jQuery('a.social').appendTo('#socialicons');
 jQuery('a.social1').appendTo('#socialicons1');
   
jQuery('#padding .message-text').clone().prependTo('form div');

jQuery('aside').clone().prependTo('#extraContainer10');
 
 jQuery("section").fitVids();

jQuery("#extraContainer11").fitVids();

if($('.sf-ec').length){ $('#featureImg').remove(); }

$('#mwrap').click(function () {
      
      isClicked=$(this).data('clicked');
          if (isClicked) {isClicked=false;} else {isClicked=true;}
          $(this).data('clicked',isClicked);
      
    if( isClicked ){
          jQuery('nav, #menuBtn').addClass('show'),('open');
          $('header').addClass('mobileb');
          $('nav').addClass('navb');
           $('nav ul ul').addClass('navul');
       }else{
        jQuery('nav, #menuBtn').removeClass('show'),('open');
        $('header').removeClass('mobileb');
        $('nav').removeClass('navb');
        $('nav ul ul').removeClass('navul');
       }
  });


$(document).ready(function(){
	$(window).bind('scroll',function(e){

		background_change();
	});

});


function background_change(){

	var scrollPosition=$(window).scrollTop();
	var Width = $(window).width();

	if (Width > 100) { 
		if (scrollPosition>=50) {
		// 	$('.navbar-inverse,.navbar-default').css({
		// 		'background':'#373737',
		// 		'-webkit-transition': 'background 1s ease',
		// 		'-moz-transition': 'background 1s ease',
		// 		'-ms-transition': 'background 1s ease',
		// 		'-o-transition': 'background 1s ease',
		// 		'transition': 'background 1s ease'

		// });
			$('.navbar-inverse,.navbar-default').addClass('desktopScreenNavbar');
		
		// 	$('ul.sub-links,.dropdown-menu').css({
		// 		'background':'#373737',
		// 		'-webkit-transition': 'background 1s ease',
		// 		'-moz-transition': 'background 1s ease',
		// 		'-ms-transition': 'background 1s ease',
		// 		'-o-transition': 'background 1s ease',
		// 		'transition': 'background 1s ease'
		// });
			$('ul.sub-links,.dropdown-menu').addClass('desktopScreenNavbarDropDownMenu');
			// $('ul.sub-links,.dropdown-menu').css('color','white');
			
		} else{
			$('.navbar-inverse,.navbar-default').removeClass('desktopScreenNavbar');
			$('ul.sub-links,.dropdown-menu').removeClass('desktopScreenNavbarDropDownMenu');
			
			
			// $('.navbar-inverse,.navbar-default').css('background', 'none');
			// $('ul.sub-links,.dropdown-menu').css('background','rgba(192,195,198,.6)');

		};
	}else{
		// $('.navbar-header').css('background','#373737');
		$('.navbar-header').addClass('mobileScreenNavbar');
		$('header').addClass('mobileScreenNavbar');
		// $('ul.sub-links,.dropdown-menu').css('background','#373737');
		$('ul.sub-links,.dropdown-menu').addClass('mobileScreenNavbarDropDownMenu');
		// $('ul.sub-links,.dropdown-menu').css('color','white');

	};

}




$(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

$('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
    });
 


  
 $(window).load(function() {
    
    
    if ($('.flexslider').css("z-index") != 1337) {
    
    $('.flexslider').flexslider({
          animation: "slide",
          controlsContainer: ".flex-container"
    });
  

    }
    
    
    });
  

 
 if($('#logo').css('left') === '-1px'){
     
     $('.flexslider').flexslider({
           animation: "fade",
           controlsContainer: ".flex-container"
     });
}
  
});