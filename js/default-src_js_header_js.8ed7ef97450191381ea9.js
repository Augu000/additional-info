(self["webpackChunkmp_wbpk"] = self["webpackChunkmp_wbpk"] || []).push([["default-src_js_header_js"],{

/***/ 4:
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ 2);
$( window ).on("load", function() {
    $(document).on("click",".js-mobile-toggle",function() {
        $(this).toggleClass('active')
        $('.js-mobile-menu').toggleClass('active')
    });
    if($('.cookies-popup').length > 0) {
        setTimeout(function(){
            $('.cookies-popup').removeClass('hidden');
        }, 150);

        $('.cookies-popup .cookies-popup__btnHolder--btn').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var thisBtn = $(this);
            var thisID = thisBtn.attr('id');

            var d = new Date();
            d.setTime(d.getTime() + (360 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();

            if(thisID === 'accept') {
                document.cookie = "cookieAgreement=1;" + expires + ";path=/";
                document.cookie = "cookiesAnalytical=1;" + expires + ";path=/";
            } else if (thisID === 'decline') {
                document.cookie = "cookieAgreement=0;" + expires + ";path=/";
                document.cookie = "cookiesAnalytical=0;" + expires + ";path=/";
            }
            $('.cookies-popup').addClass('hidden');
        });
    }

    $(document).on('click', '.data-link', function (e) {
        e.preventDefault();
        var thisEl = $(this);
        var thisBlank = thisEl.hasClass('blank') ? '_blank' : '_self';
        var thisLink = thisEl.attr('href');
        var thisDataLink = thisEl.attr('data-link');
        var thisDataSection = thisEl.parents('section').attr('data-section') ? thisEl.parents('section').attr('data-section') : 'Header';
        if(thisEl.parents('section').attr('data-section')) {
            var uaDataLink = thisDataLink;
        } else {
            var uaDataLink = thisDataLink+' @ header';
        }
        if(typeof gtag !== "undefined") {
            if((location.host !== 'tesonet-web.stillnot.live') && (location.host !== 'test.tesonet.com')) {
                gtag('event', 'Click', {
                    'event_category' : 'Main Interactions',
                    'event_label' : uaDataLink,
                    'send_to': 'UA-100228991-1',
                });
                gtag('event', 'click', {
                    'element_name': thisDataLink,
                    'element_link': thisLink,
                    'element_type': 'link_click',
                    'section_name': thisDataSection,
                    'send_to': 'G-VSGKRRQ04C'
                });
            }
        }
        window.open(thisLink, thisBlank);
    });


    $('.scroll-top-btn').on('click', function () {
        $('html, body').animate({
            scrollTop: $(".main").offset().top
        }, 600);
    });

    if($('.scrollDownToNextSection').length > 0) {
        $('.scrollDownToNextSection').on('click', function (){
            var thisClick = $(this);
            var thisSection = thisClick.parents('section');
            var nextSection = thisSection.next();
            if(nextSection.length > 0) {
                if(window.devicePixelRatio > 1) {
                    $('html, body').animate({
                        scrollTop: nextSection.offset().top - (($('header').height() * 2) + 60)
                    }, 600);
                } else {
                    $('html, body').animate({
                        scrollTop: nextSection.offset().top - $('header').height()
                    }, 600);
                }
            }
        });
    }

    header_bg();

    $( window ).on("scroll", function() {
        if($(window).width() > 1024) {
            var minus = 341;
        } else if(($(window).width() < 1025) && ($(window).width() > 767)) {
            var minus = 394;
        } else if ($(window).width() < 768) {
            var minus = 300;
        }
        topOfFooter = $('.footer').position().top;
        scrollDistanceFromTopOfDoc = $(document).scrollTop() + $(window).height();
        scrollDistanceFromTopOfFooter = scrollDistanceFromTopOfDoc - minus;

        if (scrollDistanceFromTopOfDoc > topOfFooter) {
            $('.scroll-top-btn').addClass('abs');
        } else  {
            $('.scroll-top-btn').removeClass('abs');
        }

        if($('.scroll-top-btn').length > 0) {
            if(window.scrollY > 300) {
                $('.scroll-top-btn').addClass('show');
            } else {
                $('.scroll-top-btn').removeClass('show');
            }
        }
        if($('.header-nav').length > 0) {
            header_bg();
        }
    });

    function header_bg() {
        if(window.scrollY > 1) {
            $('.header-nav').addClass('bg');
        } else {
            $('.header-nav').removeClass('bg');
        }
    }

});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1zcmNfanNfaGVhZGVyX2pzLjhlZDdlZjk3NDUwMTkxMzgxZWE5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLENBQUM7QUFDRCxJQUFJLENBQUM7QUFDTCxRQUFRLENBQUM7QUFDVCxRQUFRLENBQUM7QUFDVCxLQUFLO0FBQ0wsT0FBTyxDQUFDO0FBQ1I7QUFDQSxZQUFZLENBQUM7QUFDYixTQUFTO0FBQ1Q7QUFDQSxRQUFRLENBQUM7QUFDVDtBQUNBO0FBQ0EsMEJBQTBCLENBQUM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsZ0JBQWdCO0FBQ3JFLHVEQUF1RCxnQkFBZ0I7QUFDdkUsY0FBYztBQUNkLHFEQUFxRCxnQkFBZ0I7QUFDckUsdURBQXVELGdCQUFnQjtBQUN2RTtBQUNBLFlBQVksQ0FBQztBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsSUFBSSxDQUFDO0FBQ0w7QUFDQSxxQkFBcUIsQ0FBQztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJLENBQUM7QUFDTCxRQUFRLENBQUM7QUFDVCx1QkFBdUIsQ0FBQztBQUN4QixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsT0FBTyxDQUFDO0FBQ1IsUUFBUSxDQUFDO0FBQ1QsNEJBQTRCLENBQUM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsQ0FBQztBQUNyQixnRUFBZ0UsQ0FBQztBQUNqRSxxQkFBcUI7QUFDckIsa0JBQWtCO0FBQ2xCLG9CQUFvQixDQUFDO0FBQ3JCLDhEQUE4RCxDQUFDO0FBQy9ELHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDQUFDO0FBQ0wsV0FBVyxDQUFDO0FBQ1o7QUFDQSxVQUFVLFNBQVMsQ0FBQyw2QkFBNkIsQ0FBQztBQUNsRDtBQUNBLFVBQVUsU0FBUyxDQUFDO0FBQ3BCO0FBQ0E7QUFDQSxzQkFBc0IsQ0FBQztBQUN2QixxQ0FBcUMsQ0FBQyx5QkFBeUIsQ0FBQztBQUNoRTtBQUNBO0FBQ0E7QUFDQSxZQUFZLENBQUM7QUFDYixVQUFVO0FBQ1YsWUFBWSxDQUFDO0FBQ2I7QUFDQTtBQUNBLFdBQVcsQ0FBQztBQUNaO0FBQ0EsZ0JBQWdCLENBQUM7QUFDakIsY0FBYztBQUNkLGdCQUFnQixDQUFDO0FBQ2pCO0FBQ0E7QUFDQSxXQUFXLENBQUM7QUFDWjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFlBQVksQ0FBQztBQUNiLFVBQVU7QUFDVixZQUFZLENBQUM7QUFDYjtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXAtd2Jway8uL3NyYy9qcy9oZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJCggd2luZG93ICkub24oXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLFwiLmpzLW1vYmlsZS10b2dnbGVcIixmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICQoJy5qcy1tb2JpbGUtbWVudScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgfSk7XHJcbiAgICBpZigkKCcuY29va2llcy1wb3B1cCcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoJy5jb29raWVzLXBvcHVwJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgIH0sIDE1MCk7XHJcblxyXG4gICAgICAgICQoJy5jb29raWVzLXBvcHVwIC5jb29raWVzLXBvcHVwX19idG5Ib2xkZXItLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdmFyIHRoaXNCdG4gPSAkKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgdGhpc0lEID0gdGhpc0J0bi5hdHRyKCdpZCcpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoMzYwICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xyXG4gICAgICAgICAgICB2YXIgZXhwaXJlcyA9IFwiZXhwaXJlcz1cIiArIGQudG9VVENTdHJpbmcoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXNJRCA9PT0gJ2FjY2VwdCcpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiY29va2llQWdyZWVtZW50PTE7XCIgKyBleHBpcmVzICsgXCI7cGF0aD0vXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBcImNvb2tpZXNBbmFseXRpY2FsPTE7XCIgKyBleHBpcmVzICsgXCI7cGF0aD0vXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpc0lEID09PSAnZGVjbGluZScpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiY29va2llQWdyZWVtZW50PTA7XCIgKyBleHBpcmVzICsgXCI7cGF0aD0vXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBcImNvb2tpZXNBbmFseXRpY2FsPTA7XCIgKyBleHBpcmVzICsgXCI7cGF0aD0vXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJCgnLmNvb2tpZXMtcG9wdXAnKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5kYXRhLWxpbmsnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgdGhpc0VsID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgdGhpc0JsYW5rID0gdGhpc0VsLmhhc0NsYXNzKCdibGFuaycpID8gJ19ibGFuaycgOiAnX3NlbGYnO1xyXG4gICAgICAgIHZhciB0aGlzTGluayA9IHRoaXNFbC5hdHRyKCdocmVmJyk7XHJcbiAgICAgICAgdmFyIHRoaXNEYXRhTGluayA9IHRoaXNFbC5hdHRyKCdkYXRhLWxpbmsnKTtcclxuICAgICAgICB2YXIgdGhpc0RhdGFTZWN0aW9uID0gdGhpc0VsLnBhcmVudHMoJ3NlY3Rpb24nKS5hdHRyKCdkYXRhLXNlY3Rpb24nKSA/IHRoaXNFbC5wYXJlbnRzKCdzZWN0aW9uJykuYXR0cignZGF0YS1zZWN0aW9uJykgOiAnSGVhZGVyJztcclxuICAgICAgICBpZih0aGlzRWwucGFyZW50cygnc2VjdGlvbicpLmF0dHIoJ2RhdGEtc2VjdGlvbicpKSB7XHJcbiAgICAgICAgICAgIHZhciB1YURhdGFMaW5rID0gdGhpc0RhdGFMaW5rO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciB1YURhdGFMaW5rID0gdGhpc0RhdGFMaW5rKycgQCBoZWFkZXInO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0eXBlb2YgZ3RhZyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBpZigobG9jYXRpb24uaG9zdCAhPT0gJ3Rlc29uZXQtd2ViLnN0aWxsbm90LmxpdmUnKSAmJiAobG9jYXRpb24uaG9zdCAhPT0gJ3Rlc3QudGVzb25ldC5jb20nKSkge1xyXG4gICAgICAgICAgICAgICAgZ3RhZygnZXZlbnQnLCAnQ2xpY2snLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2V2ZW50X2NhdGVnb3J5JyA6ICdNYWluIEludGVyYWN0aW9ucycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2V2ZW50X2xhYmVsJyA6IHVhRGF0YUxpbmssXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NlbmRfdG8nOiAnVUEtMTAwMjI4OTkxLTEnLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBndGFnKCdldmVudCcsICdjbGljaycsIHtcclxuICAgICAgICAgICAgICAgICAgICAnZWxlbWVudF9uYW1lJzogdGhpc0RhdGFMaW5rLFxyXG4gICAgICAgICAgICAgICAgICAgICdlbGVtZW50X2xpbmsnOiB0aGlzTGluayxcclxuICAgICAgICAgICAgICAgICAgICAnZWxlbWVudF90eXBlJzogJ2xpbmtfY2xpY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICdzZWN0aW9uX25hbWUnOiB0aGlzRGF0YVNlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NlbmRfdG8nOiAnRy1WU0dLUlJRMDRDJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93Lm9wZW4odGhpc0xpbmssIHRoaXNCbGFuayk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJCgnLnNjcm9sbC10b3AtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKFwiLm1haW5cIikub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgfSwgNjAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKCQoJy5zY3JvbGxEb3duVG9OZXh0U2VjdGlvbicpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAkKCcuc2Nyb2xsRG93blRvTmV4dFNlY3Rpb24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgdmFyIHRoaXNDbGljayA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciB0aGlzU2VjdGlvbiA9IHRoaXNDbGljay5wYXJlbnRzKCdzZWN0aW9uJyk7XHJcbiAgICAgICAgICAgIHZhciBuZXh0U2VjdGlvbiA9IHRoaXNTZWN0aW9uLm5leHQoKTtcclxuICAgICAgICAgICAgaWYobmV4dFNlY3Rpb24ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYod2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IG5leHRTZWN0aW9uLm9mZnNldCgpLnRvcCAtICgoJCgnaGVhZGVyJykuaGVpZ2h0KCkgKiAyKSArIDYwKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBuZXh0U2VjdGlvbi5vZmZzZXQoKS50b3AgLSAkKCdoZWFkZXInKS5oZWlnaHQoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoZWFkZXJfYmcoKTtcclxuXHJcbiAgICAkKCB3aW5kb3cgKS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZigkKHdpbmRvdykud2lkdGgoKSA+IDEwMjQpIHtcclxuICAgICAgICAgICAgdmFyIG1pbnVzID0gMzQxO1xyXG4gICAgICAgIH0gZWxzZSBpZigoJCh3aW5kb3cpLndpZHRoKCkgPCAxMDI1KSAmJiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjcpKSB7XHJcbiAgICAgICAgICAgIHZhciBtaW51cyA9IDM5NDtcclxuICAgICAgICB9IGVsc2UgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XHJcbiAgICAgICAgICAgIHZhciBtaW51cyA9IDMwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9wT2ZGb290ZXIgPSAkKCcuZm9vdGVyJykucG9zaXRpb24oKS50b3A7XHJcbiAgICAgICAgc2Nyb2xsRGlzdGFuY2VGcm9tVG9wT2ZEb2MgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKTtcclxuICAgICAgICBzY3JvbGxEaXN0YW5jZUZyb21Ub3BPZkZvb3RlciA9IHNjcm9sbERpc3RhbmNlRnJvbVRvcE9mRG9jIC0gbWludXM7XHJcblxyXG4gICAgICAgIGlmIChzY3JvbGxEaXN0YW5jZUZyb21Ub3BPZkRvYyA+IHRvcE9mRm9vdGVyKSB7XHJcbiAgICAgICAgICAgICQoJy5zY3JvbGwtdG9wLWJ0bicpLmFkZENsYXNzKCdhYnMnKTtcclxuICAgICAgICB9IGVsc2UgIHtcclxuICAgICAgICAgICAgJCgnLnNjcm9sbC10b3AtYnRuJykucmVtb3ZlQ2xhc3MoJ2FicycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoJCgnLnNjcm9sbC10b3AtYnRuJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnNjcm9sbC10b3AtYnRuJykuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5zY3JvbGwtdG9wLWJ0bicpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoJCgnLmhlYWRlci1uYXYnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGhlYWRlcl9iZygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhlYWRlcl9iZygpIHtcclxuICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+IDEpIHtcclxuICAgICAgICAgICAgJCgnLmhlYWRlci1uYXYnKS5hZGRDbGFzcygnYmcnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuaGVhZGVyLW5hdicpLnJlbW92ZUNsYXNzKCdiZycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=