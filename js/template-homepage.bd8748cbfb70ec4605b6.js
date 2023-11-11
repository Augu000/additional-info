(self["webpackChunkmp_wbpk"] = self["webpackChunkmp_wbpk"] || []).push([["template-homepage"],{

/***/ 48:
/*!*****************************************!*\
  !*** ./src/scss/template-homepage.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 114:
/*!**************************************!*\
  !*** ./src/js/homepage/expertise.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ 2);
$( window ).on("load", function() {

});

/***/ }),

/***/ 49:
/*!**********************************************!*\
  !*** ./src/js/sliders/testimonial_slider.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ 11);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ 2);
// core version + navigation, pagination, thumbs modules:

// configure Swiper to use modules
swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Thumbs]);
$( window ).on("load", function() {
    var testimonials_face_slider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.testimonialsFaceSlider', {
        loop: true,
        speed: 1400,
        clickable: false,
        slidesPerView: 3,
        spaceBetween: 16,
        centerMode: true,
        centeredSlides: true,
        allowTouchMove: false,
        on: {
            init: function () {

            },
        },
    });
    var testimonials_slider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.testimonialsSlider', {
        loop: true,
        speed: 1400,
        clickable: true,
        slidesPerView: 1,
        spaceBetween: 16,
        centerMode: true,
        centeredSlides: true,
        pagination: {
            el: '.testimonials__slider--pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonials__slider--navNext',
            prevEl: '.testimonials__slider--navPrev',
        },
    });

    testimonials_face_slider.on("slideChange", () => {
        testimonials_slider.slideTo(testimonials_face_slider.activeIndex - 2);
    });
    testimonials_slider.on("slideChange", () => {
        testimonials_face_slider.slideTo(testimonials_slider.activeIndex + 2);
    });
});

/***/ }),

/***/ 47:
/*!*************************************!*\
  !*** ./src/js/template-homepage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_template_homepage_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/template-homepage.scss */ 48);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ 7);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ 4);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sliders_testimonial_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sliders/testimonial_slider */ 49);
/* harmony import */ var _homepage_expertise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/expertise */ 114);
/* harmony import */ var _homepage_expertise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_homepage_expertise__WEBPACK_IMPORTED_MODULE_4__);







/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["defaultVendors-node_modules_jquery_dist_jquery_js","defaultVendors-node_modules_swiper_swiper_min_css-node_modules_swiper_swiper_esm_js","default-src_js_header_js"], () => (__webpack_exec__(47)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtaG9tZXBhZ2UuYmQ4NzQ4Y2JmYjcwZWM0NjA1YjYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ0ZEO0FBQ2dFO0FBQ2hFO0FBQ0Esa0RBQVUsRUFBRSw4Q0FBVSxFQUFFLDhDQUFVLEVBQUUsMENBQU07QUFDMUMsQ0FBQztBQUNELHVDQUF1Qyw4Q0FBTTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0wsa0NBQWtDLDhDQUFNO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NzQztBQUNwQjtBQUNGO0FBQ29CO0FBQ1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tcC13YnBrLy4vc3JjL3Njc3MvdGVtcGxhdGUtaG9tZXBhZ2Uuc2Nzcz9iZmU5Iiwid2VicGFjazovL21wLXdicGsvLi9zcmMvanMvaG9tZXBhZ2UvZXhwZXJ0aXNlLmpzIiwid2VicGFjazovL21wLXdicGsvLi9zcmMvanMvc2xpZGVycy90ZXN0aW1vbmlhbF9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vbXAtd2Jway8uL3NyYy9qcy90ZW1wbGF0ZS1ob21lcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIkKCB3aW5kb3cgKS5vbihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XHJcblxyXG59KTsiLCIvLyBjb3JlIHZlcnNpb24gKyBuYXZpZ2F0aW9uLCBwYWdpbmF0aW9uLCB0aHVtYnMgbW9kdWxlczpcclxuaW1wb3J0IFN3aXBlciwgeyBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBUaHVtYnMgfSBmcm9tICdzd2lwZXInO1xyXG4vLyBjb25maWd1cmUgU3dpcGVyIHRvIHVzZSBtb2R1bGVzXHJcblN3aXBlci51c2UoW05hdmlnYXRpb24sIFBhZ2luYXRpb24sIFRodW1ic10pO1xyXG4kKCB3aW5kb3cgKS5vbihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgdGVzdGltb25pYWxzX2ZhY2Vfc2xpZGVyID0gbmV3IFN3aXBlcignLnRlc3RpbW9uaWFsc0ZhY2VTbGlkZXInLCB7XHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBzcGVlZDogMTQwMCxcclxuICAgICAgICBjbGlja2FibGU6IGZhbHNlLFxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNixcclxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcclxuICAgICAgICBvbjoge1xyXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHZhciB0ZXN0aW1vbmlhbHNfc2xpZGVyID0gbmV3IFN3aXBlcignLnRlc3RpbW9uaWFsc1NsaWRlcicsIHtcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIHNwZWVkOiAxNDAwLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMTYsXHJcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiAnLnRlc3RpbW9uaWFsc19fc2xpZGVyLS1wYWdpbmF0aW9uJyxcclxuICAgICAgICAgICAgdHlwZTogJ2J1bGxldHMnLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgIG5leHRFbDogJy50ZXN0aW1vbmlhbHNfX3NsaWRlci0tbmF2TmV4dCcsXHJcbiAgICAgICAgICAgIHByZXZFbDogJy50ZXN0aW1vbmlhbHNfX3NsaWRlci0tbmF2UHJldicsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRlc3RpbW9uaWFsc19mYWNlX3NsaWRlci5vbihcInNsaWRlQ2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgICB0ZXN0aW1vbmlhbHNfc2xpZGVyLnNsaWRlVG8odGVzdGltb25pYWxzX2ZhY2Vfc2xpZGVyLmFjdGl2ZUluZGV4IC0gMik7XHJcbiAgICB9KTtcclxuICAgIHRlc3RpbW9uaWFsc19zbGlkZXIub24oXCJzbGlkZUNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGVzdGltb25pYWxzX2ZhY2Vfc2xpZGVyLnNsaWRlVG8odGVzdGltb25pYWxzX3NsaWRlci5hY3RpdmVJbmRleCArIDIpO1xyXG4gICAgfSk7XHJcbn0pOyIsImltcG9ydCAnLi4vc2Nzcy90ZW1wbGF0ZS1ob21lcGFnZS5zY3NzJ1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MnXHJcbmltcG9ydCAnLi9oZWFkZXInXHJcbmltcG9ydCAnLi9zbGlkZXJzL3Rlc3RpbW9uaWFsX3NsaWRlcidcclxuaW1wb3J0ICcuL2hvbWVwYWdlL2V4cGVydGlzZSdcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9