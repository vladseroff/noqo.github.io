if(document.querySelector(".homepage__swiper")){const e=new Swiper(".homepage__swiper",{loop:!0,speed:1e3,autoplay:{delay:3e3}}),t=document.querySelector(".homepage__arrow-prev"),l=document.querySelector(".homepage__arrow-next");t.addEventListener("click",(()=>{e.slidePrev()})),l.addEventListener("click",(()=>{e.slideNext()}))}if(document.querySelector(".catalog")){let e="new";const t=document.querySelectorAll(".catalog__items");function changeCurrentSection(){let l=window.scrollY;Array.from(t).forEach(((i,o)=>{let a=t[o];a.offsetTop<=l&&e!==a.id&&(e=a.id)})),document.querySelector(".app-page__menu-item.active")&&document.querySelector(".app-page__menu-item.active").classList.remove("active"),document.querySelector(`a[href='#${e}']`).classList.add("active")}changeCurrentSection(),window.addEventListener("scroll",changeCurrentSection)}if(document.querySelector(".favourites")&&document.querySelector(".catalog__item-favourite")){const e=document.querySelectorAll(".catalog__item-favourite");Array.from(e).forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation(),alert("УДАЛЕНО ИЗ ИЗБРАННОГО")}))}))}if(document.querySelector(".search")){let e=0;const t=()=>{document.querySelector(".search").classList.add("opened"),document.querySelector("#search").focus()},l=()=>{e=0,document.querySelector(".search").classList.remove("opened")};document.querySelector(".header__icon-search").addEventListener("click",(()=>{t()})),document.querySelector(".search__close").addEventListener("click",(()=>{l()})),addEventListener("wheel",(i=>{if(!document.querySelector("#map")){let o=window.scrollY;0===o&&(e+=i.deltaY,0===o&&i.deltaY<0&&e<-500?t():i.deltaY>0&&l())}}))}if(document.querySelector(".footer")){let e=0;const t=()=>{document.querySelector(".footer").classList.add("opened")},l=()=>{e=0,document.querySelector(".footer").classList.remove("opened")};addEventListener("wheel",(i=>{window.innerHeight+window.scrollY>=document.documentElement.scrollHeight&&(e+=i.deltaY,i.deltaY>=0&&e>500?t():i.deltaY<0&&l())}))}if(document.querySelector(".product__description-title")&&document.querySelector(".product__description-title").addEventListener("click",(()=>{document.querySelector(".product__description").classList.toggle("active")})),document.querySelector(".product__slider")){new Swiper(".product__slider",{loop:!0,speed:1e3,autoplay:{delay:3e3},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}})}function initMap(){var e=new google.maps.LatLngBounds,t=new google.maps.InfoWindow;if(document.getElementById("map")){var l=new google.maps.Map(document.getElementById("map"),{mapTypeControlOptions:{},disableDefaultUI:!0,draggable:!0,mapTypeId:"Styled"}),i=new google.maps.StyledMapType([{featureType:"administrative.province",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels",stylers:[{lightness:"-8"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#000000"}]},{featureType:"administrative.locality",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",elementType:"all",stylers:[{color:"#acacac"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#484848"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.stroke",stylers:[{color:"#ff0000"},{visibility:"off"}]},{featureType:"administrative.land_parcel",elementType:"all",stylers:[{lightness:"-3"}]},{featureType:"landscape",elementType:"all",stylers:[{saturation:-100},{lightness:"72"},{visibility:"on"}]},{featureType:"landscape",elementType:"labels",stylers:[{lightness:"23"}]},{featureType:"poi",elementType:"all",stylers:[{saturation:-100},{lightness:"30"},{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{lightness:"-19"}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:"2"},{gamma:"1.21"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"off"},{saturation:"15"},{hue:"#ff0000"}]},{featureType:"road",elementType:"labels",stylers:[{lightness:"-43"}]},{featureType:"road",elementType:"labels.text",stylers:[{visibility:"on"},{lightness:"22"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{weight:"0.12"},{lightness:"-23"},{visibility:"on"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{visibility:"off"},{lightness:"71"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"all",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"all",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",elementType:"all",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",elementType:"all",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{saturation:"5"},{visibility:"on"},{lightness:"5"}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:"-24"},{saturation:-97}]},{featureType:"water",elementType:"geometry.fill",stylers:[{saturation:"-88"},{lightness:"-23"},{visibility:"on"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"labels.text",stylers:[{weight:"0.01"},{lightness:"9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{lightness:"-32"},{gamma:"2.99"}]}],{name:"Styled"});l.mapTypes.set("Styled",i);[{title:"Магазин",description:"\n                <p>Москва, Тишинская площадь, д.1 стр.1<br>\n                +7 (495) 668-06-06 доб. 1044<br>\n                Ежедневно с 10:00 до 21:00</p>\n            ",position:{lat:55.7912623,lng:49.1552471},icon:{width:20,height:28,x:10,y:28}},{title:"Магазин",description:"\n                <p>Москва, Тишинская площадь, д.1 стр.1<br>\n                +7 (495) 668-06-06 доб. 1044<br>\n                Ежедневно с 10:00 до 21:00</p>\n            ",position:{lat:55.5650831,lng:38.24791},icon:{width:20,height:28,x:10,y:28}},{title:"Магазин",description:"\n                <p>Москва, Тишинская площадь, д.1 стр.1<br>\n                +7 (495) 668-06-06 доб. 1044<br>\n                Ежедневно с 10:00 до 21:00</p>\n            ",position:{lat:57.6311885,lng:39.8524037},icon:{width:20,height:28,x:10,y:28}}].forEach((i=>{new google.maps.MarkerImage("./app/img/img1.jpg",new google.maps.Size(i.icon.width,i.icon.height),new google.maps.Point(0,0),new google.maps.Point(i.icon.x,i.icon.y));let o=new google.maps.Marker({position:new google.maps.LatLng(i.position.lat,i.position.lng),map:l,title:i.title});e.extend(o.position),google.maps.event.addListener(o,"click",(function(){t.setContent(o.description),t.open(l,o)}))})),l.fitBounds(e)}}var app={};app.global={init:function(){console.log("load global functions"),app.global.loadHeader()},loadHeader:function(){console.log("loadHeader()")}},app.global.init();
//# sourceMappingURL=all.js.map