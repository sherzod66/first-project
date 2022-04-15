let center = [39.678009, 66.942383];

function init() {
   let map = new ymaps.Map('map', {
      center: center,
      zoom: 18
   });
   let placemark = new ymaps.Placemark(center, {
      balloonContentHeader: 'Xonadon',
      balloonContentBody: 'Самарканд улица Рудаки, 175',
      balloonContentFooter: 'Строительный рынок',
   }, {
      iconLayout: 'default#image',
      iconImageHref: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
      iconImageSize: [40, 40],
      iconImageOffset: [-18, -31],
   });
   map.geoObjects.add(placemark);
}

ymaps.ready(init);