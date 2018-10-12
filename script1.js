function f(){
  let d11,d12,d13,d21,d22,d23,d31,d32,d33,d;
  d11 = document.getElementById('s11').value;
  d12 = document.getElementById('s12').value;
  d13 = document.getElementById('s13').value;
  d21 = document.getElementById('s21').value;
  d22 = document.getElementById('s22').value;
  d23 = document.getElementById('s23').value;
  d31 = document.getElementById('s31').value;
  d32 = document.getElementById('s32').value;
  d33 = document.getElementById('s33').value;
  d = ((d11 * d22 * d33) + (d12 * d23 * d31) + (d13 * d21 * d32) - (d13 * d22 * d31) - (d11 * d23 * d32) - (d12 * d21 * d33));
  document.getElementById('result').innerHTML = d;
}
const button = document.querySelector('button');
button.addEventListener('click', f);
