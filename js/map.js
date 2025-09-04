// map.js
document.addEventListener("DOMContentLoaded", function () {
  kakao.maps.load(function () {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(35.8797, 128.6287),
      level: 3
    };

    const map = new kakao.maps.Map(container, options);

    // 귀여운 강아지 마커 이미지
    const imageSrc = "https://cdn-icons-png.flaticon.com/512/616/616408.png";
    const imageSize = new kakao.maps.Size(40, 40);
    const imageOption = { offset: new kakao.maps.Point(20, 40) };
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

    const markerPosition = new kakao.maps.LatLng(35.8797, 128.6287);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage
    });
    marker.setMap(map);

    const iwContent = '<div style="padding:5px;">동대구역 🐾</div>';
    const infowindow = new kakao.maps.InfoWindow({
      content: iwContent
    });

    kakao.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
    });
  });
});
