$(document).ready(function() {
	main.init();

})

const main = {

    options: {

    },
    sources: {
        headerHeight: $('.page-header').outerHeight()
    },
    init: function(options) {
        main.options = $.extend(main.options, options);
        main.tools.highlightNavigation.call(this, null);
        
        $(window).on('scroll', function(){
            main.tools.highlightNavigation.call(this, null);
        });

        $('.js-expand-trigger').on('click', function(e) {
            $('.section-sidebar a').not($(this)).each(function(){
                $(this).removeClass('is-active');
                $(this).siblings('ul').slideUp();
            });
            $(this).addClass('is-active');
            $(this).siblings('ul').slideDown();
        });

        $('.leaf').on('click', function(e){
            $('.section-sidebar a').not($(this)).each(function(){
                $(this).removeClass('is-active');
            });
            $(this).addClass('is-active');
        })

        $('.code-tabs__tab').on('click', function(e) {
            e.preventDefault();
            main.tools.showCodeTab.call(this, null);
        });

        this.load();
    },

    load: function() {

    },

    reload: function(options) {
        main.options = $.extend(main.options, options);
        this.load();
    },

    find: function(filter) {

    },

    tools: {

        highlightNavigation: function(){
            var $navigationLinks = $('.nav-list-link');
            var $navigationExpandLinks = $('.js-expand-trigger');

            var $sections = $($(".article").get().reverse());

            var sectionIdTonavigationLink = {};
            $sections.each(function() {
                var id = $(this).attr('id');
                sectionIdTonavigationLink[id] = $('a[name=' + id + ']');
            });

            var scrollPosition = $(window).scrollTop();

            $sections.each(function() {
                var currentSection = $(this);
                var sectionTop = currentSection.offset().top - 65;

                if (scrollPosition >= sectionTop) {
                    var currentSectionId = currentSection.attr('id');
                    var $navigationLink = sectionIdTonavigationLink[currentSectionId];

                    var $parent = $navigationLink;

                    if ($navigationLink.hasClass('leaf')) {
                        var count = -1;
                        for (var i = currentSectionId.length; i>0; i--) {
                            count++;
                            if (currentSectionId[i]==="-") {
                                break;
                            }
                        }
                        var parentName = currentSectionId.substring(0, currentSectionId.length - count);

                        $parent = $('a[name=' + parentName + ']');
                    }

                    $navigationLinks.removeClass('is-active');
                    $navigationExpandLinks.not($parent).each(function(){
                        $(this).siblings('ul').slideUp();
                    });
                    $parent.siblings('ul').slideDown();
                    $navigationLink.addClass('is-active');
                    return false;
                }
            });
        },

        showCodeTab: function() {
            $('.code-tabs__tab').removeClass('is-active');
            $('.reference-col__tab').removeClass('is-active');

            $(this).addClass('is-active');
            $(`.js-lang-${$(this).attr('href').replace('#', '')}`).addClass('is-active');
        }
    }
};
