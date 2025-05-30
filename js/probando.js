            const lazyloadRunObserver = () => {
                const lazyloadBackgrounds = document.querySelectorAll(`.e-con.e-parent:not(.e-lazyloaded)`);
                const lazyloadBackgroundObserver = new IntersectionObserver( (entries) => {
                    entries.forEach( (entry) => {
                        if (entry.isIntersecting) {
                            let lazyloadBackground = entry.target;
                            if (lazyloadBackground) {
                                lazyloadBackground.classList.add('e-lazyloaded');
                            }
                            lazyloadBackgroundObserver.unobserve(entry.target);
                        }
                    }
                    );
                }
                ,{
                    rootMargin: '200px 0px 200px 0px'
                });
                lazyloadBackgrounds.forEach( (lazyloadBackground) => {
                    lazyloadBackgroundObserver.observe(lazyloadBackground);
                }
                );
            }
            ;
            const events = ['DOMContentLoaded', 'elementor/lazyload/observe', ];
            events.forEach( (event) => {
                document.addEventListener(event, lazyloadRunObserver);
            }
            );


            var astra = {
                "break_point": "921",
                "isRtl": "",
                "is_scroll_to_id": "",
                "is_scroll_to_top": "",
                "is_header_footer_builder_active": "1",
                "responsive_cart_click": "flyout"
            };