let loveEl = document.querySelector(".love");
let kata = [
  { a: "wuih!", dur: .8},
  { a: "ada Nia coi🗿", dur: 1},
  { a: "halo Nia", dur: 1},
  { a: "qt ada mo ba confess🐦", dur: 1.2},
  { a: "mr nga ba marah sto..", dur: 2},
  { a: "jujur..", dur: 2},
  { a: "qt suka pa nga..", dur: 2},
  { a: "mar qt nemau kalo..", dur: 1.2},
  { a: "ng nda bahagia karna qt..", dur: 2},
  { a: "nd bisa bawa ng jalan²..", dur: 2},
  { a: "nd bisa kase ng jajan🤣..", dur: 2},
  { a: "deng torg bakudapa cuma diskolah :(", dur: 2.3},
  { a: "mar kalo nga serius..", dur: 2},
]

let pesan;
const kirimPesan = () => {
  pesan = document.querySelector('.card-input').value;
  if (pesan == null || pesan == "") return alert(" tulisan tidak boleh kosong!");
  let btn = document.querySelector('.card-button');
  btn.innerHTML = "Mengirim..";
  setTimeout(() => renderKata(pesan), 1000)
}

const postData = async (kueri) => {
  let url = "https://roomy-carnelian-shop.glitch.me/pesan";
  let opt = {
    method: "POST",
    body: JSON.stringify({ pesan: pesan, confess: kueri }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }
  await fetch(url, opt)
    .then(cb => {
      console.log(cb);
    })
    .catch(err => console.log(err.message));
}

const renderKata = () => {
  document.getElementById("song").play();
  gsap.to(loveEl, {height: "100%"})
  kata.map((isi, index) => {
    loveEl.innerHTML += `<span id="kata-${index}" class="love-text">${isi.a}</span>`
    console.log(isi);
    if (index == kata.length - 1){
      console.log("berhasil di render");
      playAnimation(pesan)
    }
  })
}

function playAnimation(){
  console.log("animasi dijalankan!")
  console.log(kata[0].dur)
  let index = 0;
  gsap.set(".love-text", {opacity:0, scale:0});
  var tl = gsap.timeline({defaults:{ease:"back"}});
  tl.to("#kata-"+index, {opacity:1, scale: 1,duration: .4})
  tl.to("#kata-"+index, {opacity:0, scale: 0,duration: .3, delay: kata[index].dur})
  index++
  tl.to("#kata-"+index, {opacity:1, scale: 1,duration: .4})
  tl.to("#kata-"+index, {opacity:0, scale: 0,duration: .3, delay: kata[index].dur})
  index++
  tl.to("#kata-"+index, {opacity:1, scale: 1,duration: .4})
  tl.to("#kata-"+index, {opacity:0, scale: 0,duration: .3, delay: kata[index].dur})
  index++
  tl.to("#kata-"+index, {opacity:1, scale: 1,duration: .4})
  tl.to("#kata-"+index, {opacity:0, scale: 0,duration: .3, delay: kata[index].dur})
  index++
  tl.to("#kata-"+index, {opacity:1, scale: 1,duration: .4})
  tl.to("#kata-"+index, {opacity:0, scale: 0,duration: .3, delay: kata[index].dur})
  index++
  tl.to("#kata-"+index, {opacity:1, scale: 1,duration: .4})
  tl.to("#kata-"+index, {opacity:0, scale: 0,duration: .3, delay: kata[index].dur})
  index++
  tl.to("#kata-"+index, {opacity:1, scale: 1,duration: .4})
  tl.to("#kata-"+index, {opacity:0, scale: 0,duration: .3, delay: kata[index].dur})
  index++
  tl.to("#kata-"+index, {opacity:1, scale: 1,duration: .4})
  tl.to("#kata-"+index, {opacity:0, scale: 0,duration: .3, delay: kata[index].dur})
  index++
  tl.to("#kata-"+index, {opacity:1, scale: 1,duration: .4})
  tl.to("#kata-"+index, {opacity:0, scale: 0,duration: .3, delay: kata[index].dur})
  index++
  tl.to("#kata-"+index, {opacity:1, scale: 1,duration: .4})
  tl.to("#kata-"+index, {opacity:0, scale: 0,duration: .3, delay: kata[index].dur})
  index++
  tl.to("#kata-"+index, {opacity:1, scale: 1,duration: .4})
  tl.to("#kata-"+index, {opacity:0, scale: 0,duration: .3, delay: kata[index].dur})
  index++
  tl.to("#kata-"+index, {opacity:1, scale: 1,duration: .4})
  tl.to("#kata-"+index, {opacity:0, scale: 0,duration: .3, delay: kata[index].dur})
  index++
  tl.to("#kata-"+index, {opacity:1, scale: 1,duration: .4})
  tl.to("#kata-"+index, {opacity:0, scale: 0,duration: .3, delay: kata[index].dur})
  tl.to(".love .answer", {opacity:1, scale: 1,duration: .5})
}


function dapatolak(){
  postData("dapa tolak :(");
  alert("oke dang :(");
  let pesan = "iww GILA nga Jojo, ng kira qt suka pa nga?!?!";
  console.log(window.location.href = `https://wa.me/6287815118956?text=${pesan}`)
}

function dapatrima(){
  postData("dapa trima :)");
  alert("YEAAYYYY!!🥳");
}
