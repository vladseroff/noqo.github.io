if (document.querySelector('.homepage__swiper')) {
    let homepageSwiper = new Swiper('.homepage__swiper', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
    });
    
    let homePagePrev = document.querySelector('.homepage__arrow-prev')
    let homePageNext = document.querySelector('.homepage__arrow-next')
    
    homePagePrev.addEventListener('click', () => {
        homepageSwiper.slidePrev()
    })
    
    homePageNext.addEventListener('click', () => {
        homepageSwiper.slideNext()
    })
}

if (document.querySelectorAll('.catalog__items').length && document.querySelectorAll('.catalog-new').length) {
    let currentSection = 'new'
    let sections = document.querySelectorAll('.catalog__items')
    if (sections && sections.length > 0) {
        function changeCurrentSection() {
            let scrollTop = window.scrollY
            for (var element of Array.from(sections)) {
                if (element.offsetTop <= scrollTop + 100 && currentSection !== element.id) {
                    currentSection = element.id
                }
            }
            if (document.querySelector('.app-page__menu-item.active')) {
                document.querySelector('.app-page__menu-item.active').classList.remove('active')
            }
            // if (history.pushState) {
            //     history.pushState(null, null, `#${currentSection}`);
            // } else {
            //     location.hash = currentSection
            // }
            document.querySelector(`a[href='#${currentSection}']`).classList.add('active')
        }
        changeCurrentSection()
        window.addEventListener('scroll', changeCurrentSection)
    }
}

if (document.querySelector('.favourites')) {
    if (document.querySelector('.catalog__item-favourite')) {
        let hearts = document.querySelectorAll('.catalog__item-favourite')
        Array.from(hearts).forEach(item => {
            item.addEventListener('click', event => {
                event.preventDefault();
                event.stopPropagation();
                // DO SOMETHING
                alert('УДАЛЕНО ИЗ ИЗБРАННОГО')
            })
        })
    }
}

if (document.querySelector('.search')) {
    let scrollDistance = 0
    let activeSearch = () => {
        document.querySelector('.search').classList.add('opened')
        document.querySelector('#search').focus()
    }
    let deactiveSearch = () => {
        scrollDistance = 0
        document.querySelector('.search').classList.remove('opened')
    }
    document.querySelector('.header__icon-search').addEventListener('click', () => {
        activeSearch()
    })
    document.querySelector('.search__close').addEventListener('click', () => {
        deactiveSearch()
    })
    addEventListener('wheel', (event) => {
        if (!document.querySelector('#map')) {
            let scrollTop = window.scrollY
            if (scrollTop === 0) {
                scrollDistance = scrollDistance + event.deltaY
                if (scrollTop === 0 && event.deltaY < 0 && scrollDistance < -500) {
                    activeSearch()
                } else if (event.deltaY > 0) {
                    deactiveSearch()
                }
            }
        }
    })
}

if (document.querySelector('.footer')) {
    let scrollDistance = 0
    let activeSearch = () => {
        document.querySelector('.footer').classList.add('opened')
    }
    let deactiveSearch = () => {
        scrollDistance = 0
        document.querySelector('.footer').classList.remove('opened')
    }
    addEventListener('wheel', (event) => {
        if((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
            scrollDistance = scrollDistance + event.deltaY
            if (event.deltaY >= 0 && scrollDistance > 500) {
                activeSearch()
            } else if (event.deltaY < 0) {
                deactiveSearch()
            }
        } else {
            document.querySelector('.footer').classList.remove('opened')
        }
    })
}

if (document.querySelector('.product__description-title')) {
    document.querySelector('.product__description-title').addEventListener('click', () => {
        document.querySelector('.product__description').classList.toggle('active')
    })
}

if (document.querySelector('.product__like')) {
    document.querySelector('.product__like').addEventListener('click', () => {
        document.querySelector('.product__like').classList.toggle('active')
    })
}

// if (document.querySelector('.catalog__item')) {
//     document.querySelectorAll('.catalog__item').forEach(element => {
//         element.addEventListener('mouseover', () => {
//             document.querySelector('.catalog__preview').classList.add('active')
//         })
//         element.addEventListener('mouseleave', () => {
//             document.querySelector('.catalog__preview').classList.remove('active')
//         })
//     });
// }

if (document.querySelector('.product__slider')) {
    let homepageSwiper = new Swiper('.product__slider', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });
}

if (document.querySelector('.app-page__menu-contacts')) {
    document.querySelector('.app-page__menu-contacts').addEventListener('click', () => {
        document.querySelector('.footer').classList.add('opened')
    })
}

function initMap() {
    var styles = [
        {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels",
            "stylers": [
                {
                    "lightness": "-8"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#acacac"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#484848"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ff0000"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": "-3"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": "72"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "labels",
            "stylers": [
                {
                    "lightness": "23"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": "30"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": "-19"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": "2"
                },
                {
                    "gamma": "1.21"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "saturation": "15"
                },
                {
                    "hue": "#ff0000"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "lightness": "-43"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "lightness": "22"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "weight": "0.12"
                },
                {
                    "lightness": "-23"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "lightness": "71"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 30
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 40
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "saturation": "5"
                },
                {
                    "visibility": "on"
                },
                {
                    "lightness": "5"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#ffff00"
                },
                {
                    "lightness": "-24"
                },
                {
                    "saturation": -97
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "saturation": "-88"
                },
                {
                    "lightness": "-23"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "lightness": -25
                },
                {
                    "saturation": -100
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [
                {
                    "weight": "0.01"
                },
                {
                    "lightness": "9"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "lightness": "-32"
                },
                {
                    "gamma": "2.99"
                }
            ]
        }
    ]

    var bounds = new google.maps.LatLngBounds();
    var infowindow = new google.maps.InfoWindow();
    
    var options = {
        mapTypeControlOptions: {
            // mapTypeIds: ['Styled']
        },
        // center: new google.maps.LatLng(55.746274,37.6048278),
        // zoom: 12,
        // scrollwheel: false,
        disableDefaultUI: true,
        draggable: true,
        mapTypeId: 'Styled'
    };
    
    
    if (document.getElementById("map")) {
        var map = new google.maps.Map(document.getElementById("map"), options)
    
        var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' })
    
        map.mapTypes.set('Styled', styledMapType)

        let markers = [{
            title: 'Магазин',
            description: `
                <p>Москва, Тишинская площадь, д.1 стр.1<br>
                +7 (495) 668-06-06 доб. 1044<br>
                Ежедневно с 10:00 до 21:00</p>
            `,
            position: {
                lat: 55.7912623,
                lng: 49.1552471
            },
            icon: {
                width: 20,
                height: 28,
                x: 10,
                y: 28
            }
        }, {
            title: 'Магазин',
            description: `
                <p>Москва, Тишинская площадь, д.1 стр.1<br>
                +7 (495) 668-06-06 доб. 1044<br>
                Ежедневно с 10:00 до 21:00</p>
            `,
            position: {
                lat: 55.5650831,
                lng: 38.24791
            },
            icon: {
                width: 20,
                height: 28,
                x: 10,
                y: 28
            }
        },{
            title: 'Магазин',
            description: `
                <p>Москва, Тишинская площадь, д.1 стр.1<br>
                +7 (495) 668-06-06 доб. 1044<br>
                Ежедневно с 10:00 до 21:00</p>
            `,
            position: {
                lat: 57.6311885,
                lng: 39.8524037
            },
            icon: {
                width: 20,
                height: 28,
                x: 10,
                y: 28
            }
        }]

        markers.forEach(element => {
            let markerImage = new google.maps.MarkerImage(
                './img/ymaps-red.jpg',
                new google.maps.Size(37,42),
                new google.maps.Point(0,0),
                new google.maps.Point(element.icon.x, element.icon.y)
            )
            let marker = new google.maps.Marker({
                icon: markerImage,
                position: new google.maps.LatLng(element.position.lat,element.position.lng),
                map: map,
                title: element.title,
                description: element.description
            })
            bounds.extend(marker.position)
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent(marker.description)
                infowindow.open(map,marker)
            })
        })

        map.fitBounds(bounds)
    }
}

// Instantiating the global app object
var app = {};
