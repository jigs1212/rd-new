/*global jQuery, window, Modernizr, navigator, objLayerSlider, objFlickr, objPostSlider, google, objGoogleMap*/

(function($, window, Modernizr, document, CONFIG) {

    "use strict";

    /* ------------------------------------------------------------------ */
    /*	Ready															  */
    /* ------------------------------------------------------------------ */

	$(function() {

		/*------------------------------------------------------*/
		/*	Appear animations Init								*/
		/*------------------------------------------------------*/

		$('body').animation();

		/* ---------------------------------------------------- */
        /* Fixed Navigation Init								*/
        /* ---------------------------------------------------- */

        $('.navigation').navigation();

		/* ---------------------------------------------------- */
        /* Back to top Init										*/
        /* ---------------------------------------------------- */

		$('body').backToTop();

		/*------------------------------------------------------*/
		/*	Nice Scroll Init									*/
		/*------------------------------------------------------*/

		if ($('scroll-box').length) {
			$("gr-box").niceScroll();
		}

        /* ---------------------------------------------------- */
        /*	Team hover animation Init							*/
        /* ---------------------------------------------------- */

		if ($('.team-contents').length) {
			$('.team-contents').team();
		}

		/* ---------------------------------------------------- */
        /*	Tooltip Init										*/
        /* ---------------------------------------------------- */

        (function() {

            if ($('.tooltip').length) {
                $('.tooltip').tooltipster({
                    'animation': 'grow'
                });
            }
        }());

        /* ---------------------------------------------------- */
        /*	SmoothScroll Init									*/
        /* ---------------------------------------------------- */

        (function() {

            try {
                $.browserSelector();
					var $html = $('html');
					if ($html.hasClass('chrome') || $html.hasClass('ie11') || $html.hasClass('ie10')) {
						$.smoothScroll();
					}
				} catch (err) {
            }

        }());


		if($('.sly-wrapper').length) {
			if($(window).width() < 767) {
				$('.side-gallery-full-width').addClass("col-sm-1");
				$('.scroll-box').addClass("col-sm-2");
			}
		}


        /* ---------------------------------------------------- */
        /*	Progress Bar Init 									*/
        /* ---------------------------------------------------- */

		if ($('.progress-bar').length) {
            $('.progress-bar').progressBar();
        }

        /* ---------------------------------------------------- */
        /*	Parallax Init 										*/
        /* ---------------------------------------------------- */

        if (!Modernizr.touch) {
            if ($('.full-bg-image').length) {
                $('.full-bg-image').parallax('center', 0.4);
            }
        }

        /* ---------------------------------------------------- */
        /*	FitVids	Init										*/
        /* ---------------------------------------------------- */

        $('.container').fitVids();

		/* ---------------------------------------------------- */
        /*	Owl Slider Init 							`		*/
        /* ---------------------------------------------------- */

		(function() {
			if ($('#owl-slider').length) {
				var config = CONFIG.objOwlSlider;

				$("#owl-slider").owlCarousel(config);
			}
		}());

		/* ---------------------------------------------------- */
        /*	Image Slider Init 							`		*/
        /* ---------------------------------------------------- */

		(function() {

			if ($("#image-slider").length) {
				var config = CONFIG.objImageSlider;

				$("#image-slider").owlCarousel(config);
			}
		}());

		/* ---------------------------------------------------- */
        /*	Full Width Image Slider Init 						*/
        /* ---------------------------------------------------- */

		(function() {
			if ($("#full-image-slider").length) {
				var config = CONFIG.objFullImageSlider;
				$("#full-image-slider").owlCarousel(config);
			}
		}());

		/* ---------------------------------------------------- */
        /*	Full Gallery Slider Init 							`		*/
        /* ---------------------------------------------------- */

		(function() {
			if ($("#full-gallery-slider").length) {
				var config = CONFIG.objFullGallerySlider;
				$("#full-gallery-slider").owlCarousel(config);
			}
		}());

        /* ---------------------------------------------------- */
        /*	Sequence Slider	Init							`	*/
        /* ---------------------------------------------------- */

        if ($('#sequence').length) {
            $("#sequence").sequence(CONFIG.objSequence);
        }

		/*  Resize window  */
		$(window).on('resize', function() {
			resizeBG();
		}).resize();

		function resizeBG() {
			$('#sequence').css({
				height: $(window).outerHeight(true)
			});
		}

        /* ---------------------------------------------------- */
        /*	Tweets Init											*/
        /* ---------------------------------------------------- */

        (function() {
            if ($('#tweet').length) {
                twitterFetcher.fetch(CONFIG.config1);
            }
        }());

		/* ---------------------------------------------------- */
		/*	Google Maps Init									*/
		/* ---------------------------------------------------- */

		if ($('.google_map').length) {
			var $gmap = $('.google_map');
			if (window.google.maps) {
				$gmap.gMap(CONFIG.objGoogleMap);
			}
		}

        /*---------------------------------------------------- */
        /*	Alert Boxes Init 							 	   */
        /*---------------------------------------------------- */

        var $notifications = $('.error, .success, .info, .notice');

        if ($notifications.length) {
            $notifications.notifications({speed: 300});
        }

		/* ---------------------------------------------------- */
		/*	Nice Scroll Bar										*/
		/* ---------------------------------------------------- */

		if ($('.scroll-box').length){
			$('.scroll-box').niceScroll(CONFIG.objNiceScroll);
		}

		/* ---------------------------------------------------- */
		/*	ImageLoader											*/
		/* ---------------------------------------------------- */

		var time = CONFIG.preload.time;
		if($('body.animated.loaded').length) {
			$('.lazy-image').each(function() {
				$('.lazy-image').imagesLoaded().done(function() {
					$('.lazy-image').each(function (i) {
						var imageIndex = i+1;
						var currentLink = $(this);
						setTimeout(function() {
							currentLink.removeClass('img').children('.lazy').empty();
						}, imageIndex * time);
					});
				});
			});
		} else {
			$(".lazy-image").removeClass('img').children('.lazy').empty();
		}





		/* ---------------------------------------------------- */
        /*	Navigation											*/
        /* ---------------------------------------------------- */

        $('#navigation').on('mouseenter', 'li', function() {
            var $this = $(this), $subMenu = $this.children('ul');
            if ($subMenu.length) {
                $subMenu.hide().stop(true, true).fadeIn(300);
            }
        }).on('mouseleave', 'li', function() {
            $(this).children('ul').stop(true, true).fadeOut(50);
        });

        /*---------------------------------------------------- */
        /*	Search Form										   */
        /*---------------------------------------------------- */

		(function() {

            var $search = $('.search-wrapper'),
				$text = $('input[type="text"]', $search),
				$submit = $('.submit-search', $search);

            function closeSearch(el, text) {
                $submit.removeClass("active");
                el.stop(true, false).animate({
                    width: 0,
                    paddingRight: '35px'
                }, 250, function() {
                    text.val("").click(function() {
                        return false;
                    });
                    el.removeClass("active").find("input[type='text']").blur();
                });
            }

            function searchAnimate(wrapper, text) {
                wrapper.stop(true, false).animate({
                    width: '255px',
                    paddingRight: '41px'
                }, 250, function() {
                    wrapper.addClass("active").find("input[type='text']").focus();
                    text.click(function() {
                    });
                });
            }

            $submit.on('click', function(e) {
                var target = $(e.target);

                if ($(target).hasClass('active')) {
					searchAnimate($search, $text);
					closeSearch($search, $text);
					return false;
                } else {
                    target.addClass("active");
                    searchAnimate($search, $text);
					return false;
                }
            });

            $('body').on('click', function(e) {
                var current = $(e.target);
                if ($search.hasClass('active')) {
                    if (current !== $submit) {
                        closeSearch($search, $text);
                    }
                }
            });
        }());

        /* end Search Form */

        /* ---------------------------------------------------- */
        /*	CountTo												*/
        /* ---------------------------------------------------- */

        if ($('.counter').length) {
            var counter = $('.counter');
            if (!Modernizr.touch) {
                counter.waypoint(function(direction) {
                    if (direction == 'down') {
                        counter.countTo();
                    }
                }, {offset: '74%'});
            } else {
                counter.countTo();
            }
        }

        /* ---------------------------------------------------- */
        /*	Magnific Popup										*/
        /* ---------------------------------------------------- */

        if ($('.popup-gallery').length) {

            $('.popup-gallery').magnificPopup({
                delegate: '.owl-item:not(.cloned) .popup-link',
                type: 'image',
                removalDelay: 500,
                tLoading: 'Loading image #%curr%...',
                callbacks: {
                    beforeOpen: function() {

                        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                        this.st.mainClass = 'mfp-move-horizontal';
                    }
                },
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                },
                closeOnContentClick: true,
                midClick: true
            });
        }

        if ($('.image-link').length) {
            $('.image-link').magnificPopup({
                type: 'image'
            });
        }

		/* ---------------------------------------------------- */
		/*	Contact Form										*/
		/* ---------------------------------------------------- */

		// if ($('.contact-form').length) {
    //
		// 		var $form = $('.contact-form'),
		// 			$captcha = $('#captcha', $form),
		// 			$loader = '<span>Loader...</span>';
		// 			$form.append('<div class="hide contact-form-responce" />');
    //
		// 		if (CONFIG.objContactForm.captcha) {
		// 			$captcha.css('display', 'inline-block');
		// 		}
    //
		// 		$form.each(function () {
		// 			var $this = $(this),
		// 				$response = $('.contact-form-responce', $this).append('<p></p>');
		// 			$this.prepend('<input type="hidden" name="emailAddress" value="' + CONFIG.objContactForm.emailAddress + '" />');
    //
		// 			var value = CONFIG.objContactForm.captcha ? 1 : 0;
		// 				$this.prepend('<input type="hidden" name="captcha" value="' + value + '" />');
    //
		// 			$this.submit(function () {
    //
		// 				$response.find('p').html($loader);
    //
		// 				var data = {
		// 					action: "contact_form_request",
		// 					values: $this.serialize()
		// 				};
    //
		// 				//send data to server
		// 				$.post("php/contact-send.php", data, function (response) {
    //
		// 					$('.wrong-data', $this).removeClass("wrong-data");
		// 					$response.find('span').remove();
    //
		// 					response = $.parseJSON(response);
    //
		// 					if (response.is_errors) {
    //
		// 						var p = $response.find('p');
    //
		// 						p.removeClass().addClass("error");
		// 						$.each(response.info, function (input_name, input_label) {
		// 							$("[name=" + input_name + "]", $this).addClass("wrong-data");
		// 							p.append('Please enter correctly "' + input_label + '"!' + '</br>');
		// 						});
		// 						$response.show(300);
		// 					} else {
		// 						$response.find('p').removeClass().addClass('success');
		// 						if (response.info === 'success') {
		// 							$response.find('p').append('Your email has been sent!');
		// 							$this.find('input, textarea, select').val('').attr('checked', false);
		// 							$response.show(300).delay(2500).hide(400);
		// 						}
		// 						if (response.info === 'server_fail') {
		// 							$response.find('p').append('Server failed. Send later!');
		// 							$response.show(300);
		// 						}
		// 					}
    //
		// 					// Scroll to bottom of the form to show respond message
		// 					var bottomPosition = $response.offset().top - 50;
    //
		// 					if ($(document).scrollTop() < bottomPosition) {
		// 						$('html, body').animate({ scrollTop : bottomPosition });
		// 					}
		// 				});
		// 				return false;
		// 			});
		// 		});
    //
		// 	}
    //
        /* ---------------------------------------------------- */
        /*	Tabs												*/
        /* ---------------------------------------------------- */

        if ($('.tabs-holder').length) {

            var $tabsHolder = $('.tabs-holder');

            $tabsHolder.each(function(i, val) {

                var $tabsNav = $('.tabs-nav', val),
					tabsNavLis = $tabsNav.children('li'),
					$tabsContainer = $('.tabs-container', val);

                $tabsNav.each(function() {
                    $(this).next().children('.tab-content').first().stop(true, true).show();
                    $(this).children('li').first().addClass('active').stop(true, true).show();
                });

                $tabsNav.on('click', 'a', function(e) {
                    var $this = $(this).parent('li'),
                            $index = $this.index();
                    $this.siblings().removeClass('active').end().addClass('active');
                    $this.parent().next().children('.tab-content').stop(true, true).hide().eq($index).stop(true, true).fadeIn(250);
                    e.preventDefault();
                });
            });
        }

		/*------------------------------------------------------*/
		/*	Like counter										*/
		/*------------------------------------------------------*/

		if ($('.side-like, .entry-like').length) {

			$('.side-like, .entry-like').each(function (id, value) {
				var $this = $(value),
					$output = $this.closest('.bottom-meta').find('.output'),
					val = $output.html(),
					idx = ++id,
					ls = localStorage.getItem('like' + idx) || val;
					$this.data('index', idx);

				if (ls === undefined || ls === null || ls === NaN) {
					localStorage.setItem('like' + idx, val);
				} else {
					localStorage.setItem('like' + idx, ls);
				}
				$output.html(ls);

			}).on('click', function (e) {
				e.preventDefault();
				var $this = $(this),
					$output = $this.closest('.bottom-meta').find('.output');
				$.localStorageWork.call($this, $output);
				localStorage.removeItem('like');
			});

			$.localStorageWork = function ($output) {
				var index = $(this).data('index'),
					getVal = localStorage.getItem('like' + index);

				localStorage.setItem('like' + index, ++getVal);
				$output.html(getVal++);
			}
		}

        /* ---------------------------------------------------- */
        /*	Portfolio											*/
        /* ---------------------------------------------------- */

        if ($('#portfolio-items').length) {

            var folio = $('#portfolio-items');

            folio.mixitup(CONFIG.objMixitup);

            var $loadMore = $('.load-more');

            if ($loadMore.length) {
					var i = 1, self = this, $next_href = null;

                $loadMore.on('click', function(e) {
						e.preventDefault();
                    var link = $(this).attr('href'),
                            $content = '#portfolio-items',
                            $anchor = '.load-more';
                    $.get(link, function(data) {
                        var $new_content = $($content, data).wrapInner('').html();
                        $next_href = $($anchor, data).attr('href');
                        $('article:last', folio).after($new_content);
                        folio.mixitup('remix', 'all');
							initHoverEffectForThumbView(CONFIG.folioImageMove);
							$loadMore.attr('data-rel') > i ? $loadMore.attr('href', $next_href) : $loadMore.remove();
						});
						i++;
					});
				}
        }

		/*----------------------------------------------------- */
        /*	Portfolio Mouseover Effect						    */
        /*----------------------------------------------------- */

		resizeMouseOver();

		$(window).resize(function() {
			resizeMouseOver();
		})

		function resizeMouseOver() {
			if ($('#portfolio-items').length) {
				initHoverEffectForThumbView(CONFIG.folioImageMove);
			}

			if ($('.rel-works').length) {
				initHoverEffectForThumbView(CONFIG.relWorksMove);
			}

			if ($('.gr-box').length) {
				initHoverEffectForThumbView(CONFIG.slyGalleryImageMove);
			}
			if ($('.full-width.work-item-move').length) {
				initHoverEffectForThumbView(CONFIG.fullWidthImageMove);
			}
		}

		function initHoverEffectForThumbView(config) {
			jQuery('.work-item-move').each(function(){
				var thisElem = jQuery(this);
				var k=1.36;
				k = (thisElem.attr('class').indexOf('full-width')!=-1) ? 3 : 1.36;
				var getElemWidth = thisElem.width();
				var getElemHeight = getElemWidth/k;
				var centerX = getElemWidth/2;
				var centerY = getElemHeight/2;

				thisElem.css({'height' : getElemHeight});
				if (config.move==true){
					thisElem.mouseenter(function(){
						thisElem.on('mousemove', function (e) {
							var mouseX = e.pageX - thisElem.offset().left;
							var mouseY = e.pageY - thisElem.offset().top;
							var mouseDistX = (mouseX / centerX) * 100 - 100;
							var mouseDistY = (mouseY / centerY) * 100 - 100;
								thisElem.find('img').css({
									'left': -(mouseDistX/config.speed) - 15 + "%",
									'top':  -(mouseDistY/config.speed) - 15 + "%"
								});
						});
					  thisElem.find('a').fadeIn('fast');
					}).mouseleave(function(){
						thisElem.find('a').fadeOut('fast');
					});
				}
			});
        }

        /*----------------------------------------------------- */
        /*	Accordion and Toggle							    */
        /*----------------------------------------------------- */

        if ($('.acc-box').length) {

            var $box = $('.acc-box');

            $box.each(function() {

                var $trigger = $('.acc-trigger', $(this));

                $trigger.on('click', function() {
                    var $this = $(this);
                    if ($this.data('mode') === 'toggle') {
                        $this.toggleClass('active').next().stop(true, true).slideToggle(300);
                    } else {
                        if ($this.next().is(':hidden')) {
                            $trigger.removeClass('active').next().slideUp(300);
                            $this.toggleClass('active').next().slideDown(300);
                        } else if ($this.hasClass('active')) {
                            $this.removeClass('active').next().slideUp(300);
                        }
                    }
                    return false;
                });
            });
        }

		(function() {
			var touch = Modernizr.touch;
			if (touch) {
				var $items = $('.work-item');
				$items.on('click', function (e) {
					var target = $(e.target);
					target.addClass('touched');
				});
			}
		}());


		/* ---------------------------------------------------- */
		/*	Respond menu										*/
		/* ---------------------------------------------------- */

		if (!$('#mobile-menu').children('ul').length) {
			$('#mobile-menu').append($('#navigation').html());
		}

		$('#responsive-nav-button').on('click', function(e) {
			e.preventDefault();
			var $this = $(this);
			if (!$('#wrapper').is('.active')) {
				$('#wrapper').css({
					height: $('#mobile-menu').children('ul').outerHeight(true)
				}).addClass('active');
			}
		});

		$('#menu-hide').on('click', function(e) {
			e.preventDefault();
			if ($('#wrapper').is('.active')) {
				$('#wrapper').css({height: 'auto'}).removeClass('active');
			}
		});

    });


    /* ---------------------------------------------------------------------- */
    /*	Plugins																  */
    /* ---------------------------------------------------------------------- */

	$.fn.extend({
		/*	Parallax  */
		parallax: function(xpos, speed) {
			var firstTop, pos;
			return this.each(function(idx, value) {
				var $this = $(value);
				if (arguments.length < 1 || xpos === null) {
					xpos = "50%";
				}
				if (arguments.length < 2 || speed === null) {
					speed = 0.4;
				}

				return ({
					update: function() {
						firstTop = $this.offset().top;
						pos = $(window).scrollTop();
						$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speed) + "px");
					},
					init: function() {
						var self = this;
						self.update();
						$(window).on('scroll', self.update);
					}
				}.init());
			});
		},
		/*  Notifications  */
		notifications: function(options) {
			var defaults = {speed: 200},
			o = $.extend({}, defaults, options);

			return this.each(function() {

				var closeBtn = $('<a class="alert-close" href="#"></a>'),
						closeButton = $(this).append(closeBtn).find('> .alert-close');

				function fadeItSlideIt(object) {
					object.fadeTo(o.speed, 0, function() {
						object.slideUp(o.speed);
					});
				}
				closeButton.click(function() {
					fadeItSlideIt($(this).parent());
					return false;
				});
			});
		},
		/*	Progress Bar  */
		progressBar: function(options, callback) {
			var defaults = {
				speed: 600,
				easing: 'swing'
			}, o = $.extend({}, defaults, options);

			return this.each(function() {

				var elem = $(this), methods = {};

				methods = {
					init: function() {
						this.touch = Modernizr.touch ? true : false;
						this.refreshElements();
						this.processing();
					},
					elements: {
						'.bar': 'bar',
						'.percent': 'per'
					},
					$: function(selector) {
						return $(selector, elem);
					},
					refreshElements: function() {
						for (var key in this.elements) {
							this[this.elements[key]] = this.$(key);
						}
					},
					getProgress: function() {
						return this.bar.data('progress');
					},
					setProgress: function(self) {
						self.bar.animate({'width': self.getProgress() + '%'}, {
							duration: o.speed,
							easing: o.easing,
							step: function(progress) {
								self.per.text(Math.ceil(progress) + '%');
							},
							complete: function(scope, i, elem) {
								if (callback) {
									callback.call(this, i, elem);
								}
							}
						});
					},
					processing: function() {
						var self = this;
						if (self.touch) {
							self.setProgress(self);
						} else {
						  elem.waypoint(function(direction) {
							if (direction == 'down') {
								self.setProgress(self);
							}
						  }, {offset: '64%'});
						}
					}
				};
				methods.init();
			});
		},
		/*	Fit Vids  */
		fitVids: function(options) {
			var settings = {
				customSelector: null
			};

			if (!document.getElementById('fit-vids-style')) {

				var div = document.createElement('div'),
						ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0],
						cssStyles = '&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>';

				div.className = 'fit-vids-style';
				div.id = 'fit-vids-style';
				div.style.display = 'none';
				div.innerHTML = cssStyles;

				ref.parentNode.insertBefore(div, ref);

			}

			if (options) {
				$.extend(settings, options);
			}

			return this.each(function() {
				var selectors = [
					"iframe[src*='player.vimeo.com']",
					"iframe[src*='youtube.com']",
					"iframe[src*='youtube-nocookie.com']",
					"iframe[src*='kickstarter.com'][src*='video.html']",
					"object",
					"embed"
				];

				if (settings.customSelector) {
					selectors.push(settings.customSelector);
				}

				var $allVideos = $(this).find(selectors.join(','));
				$allVideos = $allVideos.not("object object"); // SwfObj conflict patch

				$allVideos.each(function() {
					var $this = $(this);
					if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) {
						return;
					}
					var height = (this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10)))) ? parseInt($this.attr('height'), 10) : $this.height(),
							width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
							aspectRatio = height / width;
					if (!$this.attr('id')) {
						var videoID = 'fitvid' + Math.floor(Math.random() * 999999);
						$this.attr('id', videoID);
					}
					$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100) + "%");
					$this.removeAttr('height').removeAttr('width');
				});
			});
		},
		/*	Back To Top  */
		backToTop: function() {
			var self = this;

			return this.each(function() {
				return {
					init: function() {
						var me = this;
						self.append('<a href="#" id="back-top" title="Back To Top"></a>');
						this.backToTop = $('#back-top');

						$(window).on('scroll', function (win) {
							me.backTopScrollHandler(win);
						});
						this.backTopClickHandler();
					},
					backTopScrollHandler: function(win) {
						$(win.currentTarget).scrollTop() > 200 ? this.backToTop.fadeIn(400) : this.backToTop.fadeOut(400);
					},
					backTopClickHandler: function() {
						this.backToTop.on('click', function (e) {
							e.preventDefault();
							$('html, body').animate({scrollTop: 0}, 1000);
						})
					}
				}.init();
			});
		},
		/*	Animation  */
		animation: function() {
			return this.each(function() {
				return {
					init: function() {
						var  self = this;
							this.support = Modernizr.cssanimations && Modernizr.csstransitions;
							this.touch = Modernizr.touch;
						if (this.support) {
							if (!this.touch) {
								this.animatedElements();
							} else {
								$("body").removeClass('animated');
								$("body").removeClass('loaded');
							}
						}
					},
					animatedElements: function() {
						if ($('.opacity').length) {
							$('.opacity').appear({
								accX: 0,
								accY: 100,
								data: 'opacity',
								speedAddClass: 100
							});
						}

						if ($('.opacity-move').length) {
							$('.opacity-move').appear({
								accX: 0,
								accY: 100,
								data: 'opacity-move',
								speedAddClass: 400
							});
						}

						if ($('.slideUp2x').length) {
							$('.slideUp2x').appear({
								accX: 0,
								accY: 100,
								data: 'slideUp2x',
								speedAddClass: 200
							});
						}

						if ($('.slideUp3x').length) {
							$('.slideUp3x').appear({
								accX: 0,
								accY: 50,
								data: 'slideUp3x',
								speedAddClass: 200
							});
						}

						if ($('.scale').length) {
							$('.scale').appear({
								accX: 0,
								accY: 165,
								data: 'scale',
								speedAddClass: 250
							});
						}

						if ($('.opacity2x').length) {
							$('.opacity2x').appear({
								accX: 0,
								accY: 150,
								data: 'opacity2x'
							});
						}
					}
				}.init();
			});
		},
		/*	Fixed Navigation  */
		navigation: function() {
			var $this = $(this),
				$window = $(window);

            return this.each(function() {
                return {
                    init: function() {
                        var self = this;

                        this.header = $('#header');
                        this.header.prepend('<div class="space"></div>');
                        this.space = $('.space', this.header);

                        this.topLine = $('.top-header-line');
                        this.middleLine = $('.middle-header-line');
                        this.bottomLine = $('.bottom-header-line');
                        this.checkNav = this.middleLine.find('.navigation').length;

                        this.addSubArrowClass();
                        this.listener(self);
                    },
                    addSubArrowClass: function() {
                        $this.children('ul').children('li').each(function(idx, val) {
                            var $self = $(val);
                            $self.find('ul').parent().each(function() {
                                var $el = $(this);
                                $el.data('is', $el.parents('ul').length === 1 ? true : false)
                                        .addClass(!$el.data('is') ? 'rightarrowclass' : '');
                            });
                        });
                    },
                    stickyMiddleLine: function(win) {
                        if ($(window).width() > 767) {
                            if ($(win).scrollTop() > 0) {
                                this.space.css({
                                    height: this.middleLine.outerHeight(true)
                                });
                                this.header.addClass('shrink-middle-line');
                            } else {
                                this.space.css({
                                    height: 'auto'
                                });
                                this.header.removeClass('shrink-middle-line');
                            }
                        }

                    },
                    stickyBottomLine: function(win) {
                        if ($(window).width() > 767) {
                            if ($(win).scrollTop() > 130) {
                                this.space.css({
                                    height: this.bottomLine.outerHeight(true)
                                });
                                this.header.addClass('shrink-bottom-line');
                            } else {
                                this.space.css({
                                    height: 'auto'
                                });
                                this.header.removeClass('shrink-bottom-line');
                            }
                        }
                    },
                    listener: function(self) {
                        $window.on('scroll', function(e) {
                            switch (self.checkNav) {
                                case 0:
                                    self.stickyBottomLine.call(self, e.currentTarget);
                                    break;
                                case 1:
                                    self.stickyMiddleLine.call(self, e.currentTarget);
                                    break;
                                default:
                                    self.stickyBottomLine.call(self, e.currentTarget);
                                    break;
                            }
                        });
                    }
                }.init()
            });
		},
		/*	Team  */
		team: function() {
			if (!this.length)
                return this;

            return this.each(function() {

                var $item = $('.item-container', $(this));

                $item.on('click mouseleave', function(e) {

                    e.preventDefault();

                    var $this = $(this),
                        $entry = $('.entry-excerpt', $this);

                    if (e.type == 'click') {
                        if (!$this.hasClass('active')) {
                            $this.addClass('active');
                            $entry.stop().animate({
                                height: 'show',
                                opacity: '1'
                            }, 400, "swing");
                        } else {
                            $entry.stop().animate({height: 'hide', opacity: '0'}, 100);
                            $this.removeClass('active');
                        }
                    } else if (e.type == 'mouseleave') {
                        $entry.stop().animate({height: 'hide', opacity: '0'});
                        $this.removeClass('active');
                    }
                });
            });
		}
	});

    /* ---------------------------------------------------- */
    /*	CountTo												*/
    /* ---------------------------------------------------- */

    $.fn.countTo = function(options) {

        options = options || {};

        return $(this).each(function() {

            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from: $(this).data('from'),
                to: $(this).data('to'),
                speed: $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals: $(this).data('decimals')
            }, options);

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                    increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
                    $self = $(this),
                    loopCount = 0,
                    value = settings.from,
                    data = $self.data('countTo') || {};

            $self.data('countTo', data);

            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // initialize the element with the starting value
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;

                render(value);

                if (typeof (settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof (settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.children('.count').html(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 1000,
        refreshInterval: 10,
        decimals: 0,
        formatter: formatter,
        onUpdate: null,
        onComplete: null
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }

}(jQuery, window, Modernizr, document, CONFIG));
;(function(e,t,n,r){function u(t,n){this.element=t;this.options=e.extend({},o,n);this._defaults=o;this._name=s;this.init()}function a(){return!!("ontouchstart"in t)}function f(){var e=n.body||n.documentElement;var t=e.style;var r="transition";if(typeof t[r]=="string"){return true}v=["Moz","Webkit","Khtml","O","ms"],r=r.charAt(0).toUpperCase()+r.substr(1);for(var i=0;i<v.length;i++){if(typeof t[v[i]+r]=="string"){return true}}return false}var s="tooltipster",o={animation:"fade",arrow:true,arrowColor:"",content:"",delay:200,fixedWidth:0,maxWidth:0,functionInit:function(e,t){},functionBefore:function(e,t){t()},functionReady:function(e,t){},functionAfter:function(e){},icon:"(?)",iconDesktop:false,iconTouch:false,iconTheme:".tooltipster-icon",interactive:false,interactiveTolerance:350,interactiveAutoClose:true,offsetX:0,offsetY:0,onlyOne:true,position:"top",speed:350,timer:0,theme:".tooltipster-default",touchDevices:true,trigger:"hover",updateAnimation:true};var l=true;if(!f()){l=false}var c=a();e(t).on("mousemove.tooltipster",function(){c=false;e(t).off("mousemove.tooltipster")});u.prototype={init:function(){var t=e(this.element);var i=this;var s=true;if(!i.options.touchDevices&&c){s=false}if(n.all&&!n.querySelector){s=false}if(s){var o=e.trim(i.options.content).length>0?i.options.content:t.attr("title");var u=i.options.functionInit(t,o);if(u)o=u;t.data("tooltipsterContent",o);t.removeAttr("title");if(i.options.iconDesktop&&!c||i.options.iconTouch&&c){var a=i.options.iconTheme;var f=e('<span class="'+a.replace(".","")+'"></span>');f.data("tooltipsterContent",o).append(i.options.icon).insertAfter(t);t.data("tooltipsterIcon",f);t=f}if(i.options.touchDevices&&c&&(i.options.trigger=="click"||i.options.trigger=="hover")){t.on("touchstart.tooltipster",function(e,t){i.showTooltip()})}else{if(i.options.trigger=="hover"){t.on("mouseenter.tooltipster",function(){i.showTooltip()});if(i.options.interactive){t.on("mouseleave.tooltipster",function(){var n=t.data("tooltipster");var s=false;if(n!==r&&n!==""){n.mouseenter(function(){s=true});n.mouseleave(function(){s=false});var o=setTimeout(function(){if(s){if(i.options.interactiveAutoClose){n.find("select").on("change",function(){i.hideTooltip()});n.mouseleave(function(t){var n=e(t.target);if(n.parents(".tooltipster-base").length===0||n.hasClass("tooltipster-base")){i.hideTooltip()}else{n.on("mouseleave",function(e){i.hideTooltip()})}})}}else{i.hideTooltip()}},i.options.interactiveTolerance)}else{i.hideTooltip()}})}else{t.on("mouseleave.tooltipster",function(){i.hideTooltip()})}}if(i.options.trigger=="click"){t.on("click.tooltipster",function(){if(t.data("tooltipster")===""||t.data("tooltipster")===r){i.showTooltip()}else{i.hideTooltip()}})}}}},showTooltip:function(t){var n=e(this.element);var i=this;if(n.data("tooltipsterIcon")!==r){n=n.data("tooltipsterIcon")}if(!n.hasClass("tooltipster-disable")){if(e(".tooltipster-base").not(".tooltipster-dying").length>0&&i.options.onlyOne){e(".tooltipster-base").not(".tooltipster-dying").not(n.data("tooltipster")).each(function(){e(this).addClass("tooltipster-kill");var t=e(this).data("origin");t.data("plugin_tooltipster").hideTooltip()})}n.clearQueue().delay(i.options.delay).queue(function(){i.options.functionBefore(n,function(){if(n.data("tooltipster")!==r&&n.data("tooltipster")!==""){var t=n.data("tooltipster");if(!t.hasClass("tooltipster-kill")){var s="tooltipster-"+i.options.animation;t.removeClass("tooltipster-dying");if(l){t.clearQueue().addClass(s+"-show")}if(i.options.timer>0){var o=t.data("tooltipsterTimer");clearTimeout(o);o=setTimeout(function(){t.data("tooltipsterTimer",r);i.hideTooltip()},i.options.timer);t.data("tooltipsterTimer",o)}if(i.options.touchDevices&&c){e("body").bind("touchstart",function(t){if(i.options.interactive){var n=e(t.target);var r=true;n.parents().each(function(){if(e(this).hasClass("tooltipster-base")){r=false}});if(r){i.hideTooltip();e("body").unbind("touchstart")}}else{i.hideTooltip();e("body").unbind("touchstart")}})}}}else{i.options._bodyOverflowX=e("body").css("overflow-x");e("body").css("overflow-x","hidden");var u=i.getContent(n);var a=i.options.theme;var h=a.replace(".","");var s="tooltipster-"+i.options.animation;var p="-webkit-transition-duration: "+i.options.speed+"ms; -webkit-animation-duration: "+i.options.speed+"ms; -moz-transition-duration: "+i.options.speed+"ms; -moz-animation-duration: "+i.options.speed+"ms; -o-transition-duration: "+i.options.speed+"ms; -o-animation-duration: "+i.options.speed+"ms; -ms-transition-duration: "+i.options.speed+"ms; -ms-animation-duration: "+i.options.speed+"ms; transition-duration: "+i.options.speed+"ms; animation-duration: "+i.options.speed+"ms;";var d=i.options.fixedWidth>0?"width:"+Math.round(i.options.fixedWidth)+"px;":"";var v=i.options.maxWidth>0?"max-width:"+Math.round(i.options.maxWidth)+"px;":"";var m=i.options.interactive?"pointer-events: auto;":"";var t=e('<div class="tooltipster-base '+h+" "+s+'" style="'+d+" "+v+" "+m+" "+p+'"></div>');var g=e('<div class="tooltipster-content"></div>');g.html(u);t.append(g);t.appendTo("body");n.data("tooltipster",t);t.data("origin",n);i.positionTooltip();i.options.functionReady(n,t);if(l){t.addClass(s+"-show")}else{t.css("display","none").removeClass(s).fadeIn(i.options.speed)}var y=u;var b=setInterval(function(){var r=i.getContent(n);if(e("body").find(n).length===0){t.addClass("tooltipster-dying");i.hideTooltip()}else if(y!==r&&r!==""){y=r;t.find(".tooltipster-content").html(r);if(i.options.updateAnimation){if(f()){t.css({width:"","-webkit-transition":"all "+i.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+i.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+i.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+i.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+i.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing");setTimeout(function(){t.removeClass("tooltipster-content-changing");setTimeout(function(){t.css({"-webkit-transition":i.options.speed+"ms","-moz-transition":i.options.speed+"ms","-o-transition":i.options.speed+"ms","-ms-transition":i.options.speed+"ms",transition:i.options.speed+"ms"})},i.options.speed)},i.options.speed)}else{t.fadeTo(i.options.speed,.5,function(){t.fadeTo(i.options.speed,1)})}}i.positionTooltip()}if(e("body").find(t).length===0||e("body").find(n).length===0){clearInterval(b)}},200);if(i.options.timer>0){var o=setTimeout(function(){t.data("tooltipsterTimer",r);i.hideTooltip()},i.options.timer+i.options.speed);t.data("tooltipsterTimer",o)}if(i.options.touchDevices&&c){e("body").bind("touchstart",function(t){if(i.options.interactive){var n=e(t.target);var r=true;n.parents().each(function(){if(e(this).hasClass("tooltipster-base")){r=false}});if(r){i.hideTooltip();e("body").unbind("touchstart")}}else{i.hideTooltip();e("body").unbind("touchstart")}})}}});n.dequeue()})}},hideTooltip:function(t){var n=e(this.element);var i=this;if(n.data("tooltipsterIcon")!==r){n=n.data("tooltipsterIcon")}var s=n.data("tooltipster");if(s===r){s=e(".tooltipster-dying")}n.clearQueue();if(s!==r&&s!==""){var o=s.data("tooltipsterTimer");if(o!==r){clearTimeout(o)}var u="tooltipster-"+i.options.animation;if(l){s.clearQueue().removeClass(u+"-show").addClass("tooltipster-dying").delay(i.options.speed).queue(function(){s.remove();n.data("tooltipster","");e("body").css("overflow-x",i.options._bodyOverflowX);i.options.functionAfter(n)})}else{s.clearQueue().addClass("tooltipster-dying").fadeOut(i.options.speed,function(){s.remove();n.data("tooltipster","");e("body").css("overflow-x",i.options._bodyOverflowX);i.options.functionAfter(n)})}}},positionTooltip:function(n){var s=e(this.element);var o=this;if(s.data("tooltipsterIcon")!==r){s=s.data("tooltipsterIcon")}if(s.data("tooltipster")!==r&&s.data("tooltipster")!==""){var u=s.data("tooltipster");u.css("width","");var a=e(t).width();var f=s.outerWidth(false);var l=s.outerHeight(false);var c=u.outerWidth(false);var h=u.innerWidth()+1;var p=u.outerHeight(false);var d=s.offset();var v=d.top;var m=d.left;var g=r;if(s.is("area")){var y=s.attr("shape");var b=s.parent().attr("name");var w=e('img[usemap="#'+b+'"]');var E=w.offset().left;var S=w.offset().top;var x=s.attr("coords")!==r?s.attr("coords").split(","):r;if(y=="circle"){var T=parseInt(x[0]);var N=parseInt(x[1]);var C=parseInt(x[2]);l=C*2;f=C*2;v=S+N-C;m=E+T-C}else if(y=="rect"){var T=parseInt(x[0]);var N=parseInt(x[1]);var k=parseInt(x[2]);var L=parseInt(x[3]);l=L-N;f=k-T;v=S+N;m=E+T}else if(y=="poly"){var A=[];var O=[];var M=0,_=0,D=0,P=0;var H="even";for(i=0;i<x.length;i++){var B=parseInt(x[i]);if(H=="even"){if(B>D){D=B;if(i===0){M=D}}if(B<M){M=B}H="odd"}else{if(B>P){P=B;if(i==1){_=P}}if(B<_){_=B}H="even"}}l=P-_;f=D-M;v=S+_;m=E+M}else{l=w.outerHeight(false);f=w.outerWidth(false);v=S;m=E}}if(o.options.fixedWidth===0){u.css({width:Math.round(h)+"px","padding-left":"0px","padding-right":"0px"})}var j=0,F=0,I=0;var q=parseInt(o.options.offsetY);var R=parseInt(o.options.offsetX);var U="";function z(){var n=e(t).scrollLeft();if(j-n<0){var r=j-n;j=n;u.data("arrow-reposition",r)}if(j+c-n>a){var r=j-(a+n-c);j=a+n-c;u.data("arrow-reposition",r)}}function W(n,r){if(v-e(t).scrollTop()-p-q-12<0&&r.indexOf("top")>-1){o.options.position=n;g=r}if(v+l+p+12+q>e(t).scrollTop()+e(t).height()&&r.indexOf("bottom")>-1){o.options.position=n;g=r;I=v-p-q-12}}if(o.options.position=="top"){var X=m+c-(m+f);j=m+R-X/2;I=v-p-q-12;z();W("bottom","top")}if(o.options.position=="top-left"){j=m+R;I=v-p-q-12;z();W("bottom-left","top-left")}if(o.options.position=="top-right"){j=m+f+R-c;I=v-p-q-12;z();W("bottom-right","top-right")}if(o.options.position=="bottom"){var X=m+c-(m+f);j=m-X/2+R;I=v+l+q+12;z();W("top","bottom")}if(o.options.position=="bottom-left"){j=m+R;I=v+l+q+12;z();W("top-left","bottom-left")}if(o.options.position=="bottom-right"){j=m+f+R-c;I=v+l+q+12;z();W("top-right","bottom-right")}if(o.options.position=="left"){j=m-R-c-12;F=m+R+f+12;var V=v+p-(v+s.outerHeight(false));I=v-V/2-q;if(j<0&&F+c>a){var J=parseFloat(u.css("border-width"))*2;var K=c+j-J;u.css("width",K+"px");p=u.outerHeight(false);j=m-R-K-12-J;V=v+p-(v+s.outerHeight(false));I=v-V/2-q}else if(j<0){j=m+R+f+12;u.data("arrow-reposition","left")}}if(o.options.position=="right"){j=m+R+f+12;F=m-R-c-12;var V=v+p-(v+s.outerHeight(false));I=v-V/2-q;if(j+c>a&&F<0){var J=parseFloat(u.css("border-width"))*2;var K=a-j-J;u.css("width",K+"px");p=u.outerHeight(false);V=v+p-(v+s.outerHeight(false));I=v-V/2-q}else if(j+c>a){j=m-R-c-12;u.data("arrow-reposition","right")}}if(o.options.arrow){var Q="tooltipster-arrow-"+o.options.position;if(o.options.arrowColor.length<1){var G=u.css("background-color")}else{var G=o.options.arrowColor}var Y=u.data("arrow-reposition");if(!Y){Y=""}else if(Y=="left"){Q="tooltipster-arrow-right";Y=""}else if(Y=="right"){Q="tooltipster-arrow-left";Y=""}else{Y="left:"+Math.round(Y)+"px;"}if(o.options.position=="top"||o.options.position=="top-left"||o.options.position=="top-right"){var Z=parseFloat(u.css("border-bottom-width"));var et=u.css("border-bottom-color")}else if(o.options.position=="bottom"||o.options.position=="bottom-left"||o.options.position=="bottom-right"){var Z=parseFloat(u.css("border-top-width"));var et=u.css("border-top-color")}else if(o.options.position=="left"){var Z=parseFloat(u.css("border-right-width"));var et=u.css("border-right-color")}else if(o.options.position=="right"){var Z=parseFloat(u.css("border-left-width"));var et=u.css("border-left-color")}else{var Z=parseFloat(u.css("border-bottom-width"));var et=u.css("border-bottom-color")}if(Z>1){Z++}var tt="";if(Z!==0){var nt="";var rt="border-color: "+et+";";if(Q.indexOf("bottom")!==-1){nt="margin-top: -"+Math.round(Z)+"px;"}else if(Q.indexOf("top")!==-1){nt="margin-bottom: -"+Math.round(Z)+"px;"}else if(Q.indexOf("left")!==-1){nt="margin-right: -"+Math.round(Z)+"px;"}else if(Q.indexOf("right")!==-1){nt="margin-left: -"+Math.round(Z)+"px;"}tt='<span class="tooltipster-arrow-border" style="'+nt+" "+rt+';"></span>'}u.find(".tooltipster-arrow").remove();U='<div class="'+Q+' tooltipster-arrow" style="'+Y+'">'+tt+'<span style="border-color:'+G+';"></span></div>';u.append(U)}u.css({top:Math.round(I)+"px",left:Math.round(j)+"px"});if(g!==r){o.options.position=g}}},getContent:function(t){var n=t.data("tooltipsterContent");n=e(e.parseHTML("<div>"+n+"</div>")).html();return n}};e.fn[s]=function(t){if(t&&t==="setDefaults"){e.extend(o,arguments[1])}else{if(typeof t==="string"){var n=this;var i=arguments[1];var a=null;if(n.data("plugin_tooltipster")===r){var f=n.find("*");n=e();f.each(function(){if(e(this).data("plugin_tooltipster")!==r){n.push(e(this))}})}n.each(function(){switch(t.toLowerCase()){case"show":e(this).data("plugin_tooltipster").showTooltip();break;case"hide":e(this).data("plugin_tooltipster").hideTooltip();break;case"disable":e(this).addClass("tooltipster-disable");break;case"enable":e(this).removeClass("tooltipster-disable");break;case"destroy":e(this).data("plugin_tooltipster").hideTooltip();var s=e(this).data("tooltipsterIcon");if(s)s.remove();e(this).attr("title",n.data("tooltipsterContent")).removeData("plugin_tooltipster").removeData("tooltipsterContent").removeData("tooltipsterIcon").off(".tooltipster");break;case"elementicon":a=e(this).data("tooltipsterIcon");a=a?a[0]:r;return false;case"update":var o=i;if(e(this).data("tooltipsterIcon")===r){e(this).data("tooltipsterContent",o)}else{var u=e(this).data("tooltipsterIcon");u.data("tooltipsterContent",o)}break;case"reposition":e(this).data("plugin_tooltipster").positionTooltip();break;case"val":a=e(this).data("tooltipsterContent");console.log(a);return false}});return a!==null?a:this}else{return this.each(function(){if(!e.data(this,"plugin_"+s)){e.data(this,"plugin_"+s,new u(this,t))}})}}};if(c){t.addEventListener("orientationchange",function(){if(e(".tooltipster-base").length>0){e(".tooltipster-base").each(function(){var t=e(this).data("origin");t.data("plugin_tooltipster").hideTooltip()})}},false)}e(t).on("scroll.tooltipster",function(){var t=e(".tooltipster-base").data("origin");if(t){t.tooltipster("reposition")}});e(t).on("resize.tooltipster",function(){var t=e(".tooltipster-base").data("origin");if(t!==null&&t!==r){t.tooltipster("reposition")}})})(jQuery,window,document);
