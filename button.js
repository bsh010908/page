const buttons = document.querySelectorAll('.device-btn');
const screen = document.getElementById('screen');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // 모든 버튼에서 active 제거
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // 화면 클래스 변경
    const device = btn.dataset.device;
    screen.className = device;
  });
});
