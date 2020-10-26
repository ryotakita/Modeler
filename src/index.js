window.addEventListener('DOMContentLoaded', init);

function init() {
  const width = 960;
  const height = 540;

  // �����_���[���쐬
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  // �V�[�����쐬
  const scene = new THREE.Scene();

  // �J�������쐬
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.set(0, 0, +1000);

  // �����쐬
  const geometry = new THREE.BoxGeometry(500, 500, 500);
  const material = new THREE.MeshStandardMaterial({color: 0x0000FF});
  const box = new THREE.Mesh(geometry, material);
  scene.add(box);

  // ���s����
  const light = new THREE.DirectionalLight(0xFFFFFF);
  light.intensity = 2; // ���̋�����{��
  light.position.set(1, 1, 1);
  // �V�[���ɒǉ�
  scene.add(light);

  // ������s
  tick();

  function tick() {
    requestAnimationFrame(tick);

    // ������]������
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

    // �����_�����O
    renderer.render(scene, camera);
  }
}