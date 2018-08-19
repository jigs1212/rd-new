/* ---------------------------------------------------------------------- */
/*	Theme Settings														  */
/* ---------------------------------------------------------------------- */

	var CONFIG = (function ($, window) {

		return {
			// /* ---------------------------------------------------- */
			// /*	Tweets												*/
			// /* ---------------------------------------------------- */
			//
            // config1: {
            //     "id": '351293746240958465',                 // Twitter Widget ID
            //     "domId": 'tweet',
            //     "maxTweets": 1,
            //     "enableLinks": true,
            //     "showUser": false,
            //     "showTime": true,
            //     "showRetweet": false,
            //     "showInteraction": false
            // },

			/*  Contact form  */
			objContactForm: {
				captcha: true,						        // Boolean:  (true/false)
				emailAddress: 'youremail@emaildomain.com'   // Email for contact
			},

			/* ---------------------------------------------------- */
			/*	Google Map											*/
			/* ---------------------------------------------------- */

			objGoogleMap : {
				address: 'New York, USA',			   // City, County
				markers: [
					{'address' : 'Grand St, New York'} // Street
				],
				zoom: 14,							   // 0 - 21
				scrollwheel: false,					   // Boolean: (true/false)
				maptype : 'roadmap'					   // Maptype: roadmap, satellite, hybrid, terrain
			},

			/* ---------------------------------------------------- */
			/*	Portfolio Mixitup									*/
			/* ---------------------------------------------------- */

			objMixitup : {
				targetSelector: '.mix',
				filterSelector: '.filter',
				buttonEvent: 'click',
				effects: 'translateZ(-360px) stagger(34ms) scale(1.11) fade',	// The effects for all filter operations as a space-separated string.
				listEffects: null,
				easing: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',	// A valid CSS3 transition-timing function or shorthand
				layoutMode: 'grid',
				targetDisplayGrid: 'inline-block',
				targetDisplayList: 'block',
				transitionSpeed: 680,
				showOnLoad: 'all',		// Select filter: all, architecture, buildings, bridges
				sortOnLoad: false,		// Boolean: (true/false) - on/off sorting on load
				multiFilter: false,		// Boolean: (true/false)
				resizeContainer: true,
				minHeight: 0,
				perspectiveDistance: '2000',	// the perspective value in CSS units applied to the container during animations, affecting any 3d transform-based effects, default '3000px'
				perspectiveOrigin: '50% 50%',	// the perspective-origin value applied to the container during animations, affecting any 3d transform based effects, default '50% 50%'
				animateGridList: true,			// Boolean: (true/false)
				onMixEnd: null
			},

			objNiceScroll: {
				cursorcolor: "#ffd200",
				cursorwidth: "8px",		// cursor width in pixel, default is 5 (you can write "5px" too)
				cursorborder: "none",	// css definition for cursor border, default is "1px solid #fff"
				cursorborderradius: "0",// border radius in pixel for cursor, default is "4px"
				cursoropacitymin: "1",	// change opacity very cursor is inactive (scrollabar "hidden" state), range from 1 to 0, default is 0 (hidden)
				vertrailenabled: false,	// Boolean: (true/false)
				background: "#202223",	// change css for rail background, default is ""
				zindex: 6000,			// change z-index for scrollbar div, default value is 9999
				touchbehavior: true,	// Boolean: (true/false). enable cursor-drag scrolling like touch devices in desktop computer, default is false
				cursordragontouch: true,// Boolean: (true/false). drag cursor in touch / touchbehavior mode also (default:false)
				railpadding: {		// set padding for rail bar (default:{top:0,right:0,left:0,bottom:0})
						top: "30px"
					},
					rail: {
						'height':' 8px'
					}
			},

			/* ---------------------------------------------------- */
			/*	Sequence Slider										*/
			/* ---------------------------------------------------- */

			objSequence : {
                nextButton: true,	// Boolean:  (true/false)
                prevButton: true,	// Boolean:  (true/false)
				reverseAnimationsWhenNavigatingBackwards: true,	// Boolean:  (true/false).Whether animations should be reversed when a user // Changed value
																	//navigates backwards by clicking a previous button/swiping/pressing the left key.
				hidePreloaderUsingCSS: false,	// Boolean:  (true/false) Default: true, Dependencies: preloader: true. // Changed value
				hidePreloaderDelay: 0,			// Type: a number representing time in milliseconds, Default: 0, Dependencies: preloader: true and hidePreloaderUsingCSS: true
												// The number of milliseconds to wait after the preloader has been hidden before initiating the first animation.
				transitionThreshold: 2500,		// Boolean: (true/false). Type: true/false or a number representing milliseconds, Default: false
                animateStartingFrameIn: true,	// Boolean: (true/false). true  - the starting frame will begin in its “start” position and move to its “animate-in” position when Sequence loads,
												//						  false - the starting frame will begin in its “animate-in” position when Sequence loads.
                autoPlay: true,		// Boolean:  (true/false). Cause Sequence to automatically change between frames over a period of time, as defined in autoPlayDelay.
				autoPlayDelay: 5000,// Set delay in miliseconds
				preloader: true,	// Boolean:  (true/false). true:  Use the preloader and styles with the CSS selector (.sequence-preloader).
									//						   false: don’t use a preloader.
				pauseOnHover: false,// Boolean:  (true/false). Whether frames should stop auto playing when the user hovers over Sequence. autoPlay will continue again when the 
									//						   user moves their cursor outside of Sequence.
				cycle: true			// Boolean:  (true/false) - cycle slider
            },

			/* ---------------------------------------------------- */
			/*	Owl Slider										    */
			/* ---------------------------------------------------- */

			objOwlSlider : {
				items: 3,					// Quantity of items to show
				autoplay : true,			// Boolean: (true/false)
				autoplayTimeout: 5000,		// Timeout in ms
				smartSpeed: 1200,			// Slide speed in ms
//                navigation: true,			// Boolean: (true/false)
                rewindNav: true,			// Boolean: (true/false) - cycle slider
                loop: true,					// Boolean: (true/false). Inifnity loop
				theme: "carousel-theme",
				dots: false,				// Boolean: (true/false). Show dots navigation
				nav: true,					// Boolean: (true/false). Show next/prev buttons
				responsive:{
					320: {
					   items:1
					},
					480: {
					   items: 2
					},
				    769:{
				      items:3
				    },
				    1199:{
				      items:3
				    }
				}
            },

			/* ---------------------------------------------------- */
			/*	Image Slider										*/
			/* ---------------------------------------------------- */

			objImageSlider : {
				items: 1,					// Quantity of items to show
				autoplay: true,				// Boolean: (true/false)
                counter: true,				// Boolean: (true/false)
                autoplayTimeout: 5000,		// Timeout in ms
				smartSpeed: 1200,			// Slide speed in ms
				rewindNav: true,			// Boolean: (true/false) - cycle slider
                loop: true,					// Boolean: (true/false). Inifnity loop
                dots: false,				// Boolean: (true/false). Show dots navigation
                info: getInfo,				// The only one Owl function callback to retrieve basic information
											// (current item/pages/widths). Info function second parameter is Owl DOM object reference.
                nav: true,					// Boolean: (true/false). Show next/prev buttons
				theme: "image-slider-theme"
			},

			/* ---------------------------------------------------- */
			/*	Full Width Image Slider										*/
			/* ---------------------------------------------------- */

			objFullImageSlider : {
				items: 1,
				autoplay: true,				// Boolean: (true/false)
                counter: true,				// Boolean: (true/false)
                autoplayTimeout: 5000,		// Timeout in ms
				smartSpeed: 1200,			// Slide speed in ms
				rewindNav: true,			// Boolean: (true/false) - cycle slider
                loop: true,					// Boolean: (true/false). Inifnity loop
                dots: false,				// Boolean: (true/false). Show dots navigation
                info: getInfo,				// The only one Owl function callback to retrieve basic information
											// (current item/pages/widths). Info function second parameter is Owl DOM object reference.
                nav: true,					// Boolean: (true/false). Show next/prev buttons
				theme: "image-slider-theme"
			},

			/* ---------------------------------------------------- */
			/*	Full Gallery Image Slider										*/
			/* ---------------------------------------------------- */

			objFullGallerySlider : {
				items: 1,
				autoplay: false,				// Boolean: (true/false)
                counter: true,				// Boolean: (true/false)
                autoplayTimeout: 5000,		// Timeout in ms
				smartSpeed: 1200,			// Slide speed in ms
				rewindNav: true,			// Boolean: (true/false) - cycle slider
                loop: true,					// Boolean: (true/false). Inifnity loop
                dots: false,				// Boolean: (true/false). Show dots navigation
                info: getInfo,				// The only one Owl function callback to retrieve basic information
											// (current item/pages/widths). Info function second parameter is Owl DOM object reference.
                nav: true,					// Boolean: (true/false). Show next/prev buttons
				theme: "image-slider-theme"
			},


			/* ---------------------------------------------------- */
			/*	MouseOver effect									*/
			/* ---------------------------------------------------- */

			fullWidthImageMove : {
				move : true,				// Boolean: (true/false)
				speed : 6.64				// Move speed in ms
			},
			slyGalleryImageMove : {
				move : true,				// Boolean: (true/false)
				speed : 6.64				// Move speed in ms
			},
			folioImageMove : {
				move : true,                // Boolean: (true/false)
				speed : 6.64				// Move speed in ms
			},

			relWorksMove: {
				move : true,				// Boolean: (true/false)
				speed : 6.64				// Move speed in ms
			},

			/* ---------------------------------------------------- */
			/*	Preload									*/
			/* ---------------------------------------------------- */

			preload: {
				time: 300
			}

		}

            function getInfo(i){
		        var owlInfo = i,prop,value,name;
		        var current = ++i['currentPosition'];
		        var all = i['allItems'];

		        $('.currentPosition').text(current);
		        $('.allItems').text(all);

		    }

	}(jQuery, window));

/* ---------------------------------------------------------------------- */
/*	end Theme Settings													  */
/* ---------------------------------------------------------------------- */
