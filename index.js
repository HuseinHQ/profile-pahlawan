let datas = {
  "Ir. Soekarno": {
    id: "Ir. Soekarno",
    tempatLahir: "Surabaya",
    tanggalLahir: "6 Juni 1901",
    meninggal: "21 Juni 1970",
    img: "https://d22gwcrfo2de51.cloudfront.net/wp-content/uploads/2020/02/Soekarno_sq-1-e1585486258865.jpg",
    desc: 'Soekarno, dikenal juga sebagai Bung Karno, adalah salah satu tokoh utama dalam perjuangan kemerdekaan Indonesia. Ia lahir pada tahun 1901 dan menjadi proklamator kemerdekaan Indonesia pada 1945, serta presiden pertama negara ini hingga tahun 1967. Soekarno dikenal sebagai orator ulung dan pemimpin karismatik yang memimpin rakyat Indonesia melalui perjuangan berat dalam meraih kemerdekaan dari penjajahan Belanda. Ia juga merupakan pendiri ideologi nasional "Pancasila" dan mengadvokasi gerakan non-blok selama periode Perang Dingin. Meskipun pemerintahannya berakhir dengan pergantian kekuasaan, warisan dan pengaruhnya dalam sejarah modern Indonesia tetap dikenang hingga kini.',
  },
  "Dr. Mohammad Hatta": {
    id: "Dr. Mohammad Hatta",
    tempatLahir: "Bukittinggi",
    tanggalLahir: "12 Agustus 1902",
    meninggal: "14 Maret 1980",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/VP_Hatta.jpg/330px-VP_Hatta.jpg",
    desc: "Dr. Mohammad Hatta, juga dikenal sebagai Bung Hatta, lahir di Bukittinggi pada 12 Agustus 1902. Beliau merupakan salah satu pendiri Republik Indonesia dan tokoh perjuangan kemerdekaan yang berperan penting dalam merumuskan dasar-dasar negara dan ekonomi. Bersama dengan Ir. Soekarno, Hatta memainkan peran kunci dalam memimpin perjuangan melawan penjajahan Belanda. Beliau juga menjabat sebagai wakil presiden pertama Indonesia. Pemikiran visioner dan dedikasinya dalam memajukan bangsa membuatnya diakui sebagai salah satu pahlawan nasional Indonesia yang berjasa besar dalam membangun fondasi negara yang merdeka dan berdaulat.",
  },
  "Cut Nyak Dien": {
    id: "Cut Nyak Dien",
    tempatLahir: "Aceh",
    tanggalLahir: "1848",
    meninggal: "6 November 1908",
    img: "data:image/jpeg;base64,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",
    desc: "Cut Nyak Dien lahir di Aceh pada tahun 1848. Beliau merupakan seorang pahlawan perempuan yang gigih melawan penjajah Belanda selama Perang Aceh. Cut Nyak Dien terkenal karena kepemimpinannya dalam perlawanan dan peran pentingnya dalam memimpin pasukan Aceh melawan tentara kolonial. Pengorbanan dan semangat juangnya dalam mempertahankan kemerdekaan Aceh membuatnya dihormati sebagai simbol perlawanan wanita dan nasionalisme di Indonesia. Cut Nyak Dien merupakan teladan inspiratif dalam mempertahankan nilai-nilai keberanian dan keadilan.",
  },
  "R.A. Kartini": {
    id: "R.A. Kartini",
    tempatLahir: "Jepara",
    tanggalLahir: "21 April 1879",
    meninggal: "17 September 1904",
    img: "https://persma.radenintan.ac.id/wp-content/uploads/2023/04/IMG-20230421-WA0005.jpg",
    desc: "R.A. Kartini dilahirkan di Jepara pada 21 April 1879. Ia dikenal sebagai pahlawan perempuan Indonesia yang berjuang untuk emansipasi perempuan dan pendidikan. Kartini mendorong perubahan sosial dengan memperjuangkan hak-hak pendidikan bagi perempuan dan mengatasi keterbatasan tradisional. Melalui surat-suratnya, ia menyuarakan pentingnya kesetaraan gender dan pembebasan perempuan dari kungkungan budaya patriarki. Meskipun hidupnya singkat, warisannya menginspirasi lahirnya gerakan perempuan dan pendidikan di Indonesia. R.A. Kartini diakui sebagai simbol perjuangan perempuan dalam mencapai hak-haknya dan membawa perubahan positif dalam masyarakat.",
  },
  "Ki Hajar Dewantara": {
    id: "Ki Hajar Dewantara",
    tempatLahir: "Yogyakarta",
    tanggalLahir: "2 Mei 1889",
    meninggal: "28 April 1959",
    img: "https://s3.ap-southeast-1.amazonaws.com/labusel/smpnegeri1seikanan/RWgwRG1PYndDZ0UzMm40T3BqckNKZ1NNRTdVbGc5aGFPbkJpekhBLzBoTT0=-562.jpg",
    desc: "Ki Hajar Dewantara lahir di Yogyakarta pada 2 Mei 1889. Beliau dikenal sebagai Bapak Pendidikan Nasional Indonesia dan pendiri Taman Siswa, sebuah lembaga pendidikan alternatif pada masa kolonial. Melalui filosofi 'Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karso, Tut Wuri Handayani', Ki Hajar Dewantara mempromosikan pendidikan yang mengembangkan potensi unik setiap individu. Usahanya dalam memperjuangkan pendidikan yang inklusif dan berkeadilan telah memberikan dampak yang signifikan terhadap perkembangan sistem pendidikan Indonesia. Ki Hajar Dewantara dihormati sebagai tokoh yang berdedikasi dalam memajukan pendidikan dan pemikiran kritis di Indonesia.",
  },
  "Dewi Sartika": {
    id: "Dewi Sartika",
    tempatLahir: "Bandung",
    tanggalLahir: "4 September 1884",
    meninggal: "11 September 1947",
    img: "https://edura.unj.ac.id/edura-news/wp-content/uploads/2021/05/dewi-sartikaaaa.jpg",
    desc: "Dewi Sartika lahir di Bandung pada 4 September 1884. Beliau adalah seorang pejuang pendidikan dan emansipasi perempuan yang mendirikan sekolah pertama untuk perempuan pribumi di Hindia Belanda, yaitu Sekolah Isteri, pada tahun 1907. Dewi Sartika mendorong keterlibatan perempuan dalam pendidikan dan pembangunan masyarakat. Ia juga aktif dalam menyuarakan isu-isu sosial dan politik serta berperan dalam gerakan perempuan di awal abad ke-20. Dedikasinya dalam memperjuangkan hak pendidikan dan peran perempuan menjadikan Dewi Sartika sebagai inspirasi dalam perjuangan emansipasi perempuan di Indonesia.",
  },
  "Sutan Syahrir": {
    id: "Sutan Syahrir",
    tempatLahir: "Padang Panjang",
    tanggalLahir: "5 Maret 1909",
    meninggal: "9 April 1966",
    img: "https://kebudayaan.kemdikbud.go.id/mkn/wp-content/uploads/sites/61/2017/12/SutanSjahrir.jpg",
    desc: "Sutan Syahrir dilahirkan di Padang Panjang pada 5 Maret 1909. Beliau adalah seorang intelektual, politikus, dan perintis kemerdekaan Indonesia. Syahrir menjadi salah satu pendiri Partai Indonesia Merdeka (Parindra) dan kemudian menjadi Perdana Menteri pertama Indonesia setelah proklamasi kemerdekaan. Ia dikenal dengan pandangan-pandangannya yang progresif dan kritis terhadap kolonialisme. Meskipun menghadapi tantangan politik yang kompleks, Syahrir tetap konsisten dalam mendorong demokrasi dan kemerdekaan. Warisannya sebagai pemikir dan pemimpin telah memberikan pengaruh yang berkelanjutan dalam perjalanan politik Indonesia.",
  },
  "Tjilik Riwut": {
    id: "Tjilik Riwut",
    tempatLahir: "Purworejo",
    tanggalLahir: "7 Juli 1926",
    meninggal: "2 Juni 2013",
    img: "data:image/jpeg;base64,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",
    desc: "Tjilik Riwut lahir di Purworejo pada 7 Juli 1926. Beliau adalah seorang pahlawan nasional yang berperan penting dalam memajukan daerah Kalimantan Tengah. Tjilik Riwut terlibat dalam pembangunan dan peningkatan infrastruktur di wilayah tersebut. Ia juga menjadi tokoh yang mendorong pengakuan dan pemahaman terhadap keberagaman suku dan budaya di Kalimantan. Sebagai gubernur pertama Kalimantan Tengah, Tjilik Riwut berupaya menjaga keharmonisan antar-etnis dan membangun ekonomi daerah. Dedikasinya dalam membangun Kalimantan Tengah menjadikannya contoh inspiratif dalam memajukan daerah-daerah Indonesia yang terpencil.",
  },
  "Dr. G.S.S.J. Ratulangi": {
    id: "Dr. G.S.S.J. Ratulangi",
    tempatLahir: "Tondano",
    tanggalLahir: "5 November 1890",
    meninggal: "30 Juni 1949",
    img: "https://2.bp.blogspot.com/-P2mzRldzzis/WzT013KVzgI/AAAAAAAABFc/8pOA6lOIbBAYsQhVcxvIRXgGdg9vCQF-QCLcBGAs/s1600/dr-sam-ratulangi.jpg",
    desc: "Dr. Gerungan Saul Samuel Jacob Ratulangi, atau lebih dikenal sebagai G.S.S.J. Ratulangi, lahir di Tondano pada 5 November 1890. Beliau adalah seorang pahlawan nasional Indonesia yang berjuang dalam pergerakan kemerdekaan. Ia dikenal sebagai tokoh perintis dalam pembentukan Negara Kesatuan Republik Indonesia Timur (NKRI-T) yang merupakan bagian dari upaya menjaga integritas wilayah Indonesia dari pengaruh kolonialisme. Ratulangi juga merupakan seorang intelektual, penulis, dan tokoh pergerakan yang berdedikasi dalam memajukan masyarakat dan kebudayaan di Indonesia Timur. Warisannya dalam perjuangan nasional dan kecintaannya pada tanah air membuatnya dihormati sebagai salah satu arsitek perjuangan wilayah timur Indonesia.",
  },
  "Dr. Wahidin Soedirohoesodo": {
    id: "Dr. Wahidin Soedirohoesodo",
    tempatLahir: "Surabaya",
    tanggalLahir: "9 Juni 1896",
    meninggal: "20 Juni 1952",
    img: "data:image/jpeg;base64,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",
    desc: "Dr. Wahidin Soedirohoesodo lahir di Surabaya pada 9 Juni 1896. Beliau adalah seorang pahlawan nasional Indonesia yang berjuang dalam pergerakan kemerdekaan dan memainkan peran penting dalam memajukan pendidikan dan kesehatan. Wahidin Soedirohoesodo merupakan pendiri Sekolah Kedokteran Bataks dan juga berkontribusi dalam pendirian Universitas Airlangga di Surabaya. Selain itu, ia juga merupakan salah satu tokoh perintis dalam bidang kesehatan di Indonesia, menjadikannya teladan dalam pelayanan medis masyarakat. Dedikasinya dalam bidang pendidikan dan kesehatan serta perjuangannya dalam meraih kemerdekaan membuatnya dihormati sebagai pahlawan nasional.",
  },
};

const SERC = document.getElementById("SERC");
let dataConverter;
function webdata() {
  const gallery = document.querySelector("#gallery");
  let container = document.createElement("div");
  container.setAttribute("class", "container");
  let count = 0;

  if (dataConverter === undefined) {
    dataConverter = datas;
  }
  for (let data in dataConverter) {
    count++;
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", data);

    const cardImg = document.createElement("div");
    cardImg.setAttribute("class", "card-img");

    const img = document.createElement("img");
    img.setAttribute("src", datas[data].img);
    cardImg.appendChild(img);

    const cardContent = document.createElement("div");
    cardContent.setAttribute("class", "card-content");

    const h3 = document.createElement("h3");
    h3.innerText = data;
    const p1 = document.createElement("p");
    p1.innerHTML = `<span>Tempat lahir:</span> ${datas[data].tempatLahir}`;
    const p2 = document.createElement("p");
    p2.innerHTML = `<span>Tanggal lahir:</span> ${datas[data].tanggalLahir}`;
    const p3 = document.createElement("p");
    p3.innerHTML = `<span>Meninggal:</span> ${datas[data].meninggal}`;
    const p4 = document.createElement("p");
    p4.innerText = datas[data].desc;
    const p5 = document.createElement("p");
    p5.innerText = datas[data].id;
    p5.setAttribute("style", "display: none");

    cardContent.appendChild(h3);
    cardContent.appendChild(p1);
    cardContent.appendChild(p2);
    cardContent.appendChild(p3);
    cardContent.appendChild(p4);
    cardContent.appendChild(p5);

    card.appendChild(cardImg);
    card.appendChild(cardContent);

    const mainPage = document.querySelector("#main-page");
    // Memberi event click pada card
    card.addEventListener("click", () => {
      selectedId = datas[data].id;
      mainPage.setAttribute("style", "display: none");
      console.log(datas[data].id);

      // Detail Page
      const detail = document.querySelector("#detail");

      for (let data in datas) {
        if (datas[data].id === selectedId) {
          detail.removeAttribute("style");
          detail.innerHTML = `
      <div class="top-content">
          <img src="${datas[data].img}">
          <div class="top-content-info">
              <h2>${data}</h2>
              <p><span>Tempat Lahir:</span> ${datas[data].tempatLahir}</p>
              <p><span>Tanggal Lahir:</span> ${datas[data].tanggalLahir}</p>
              <p><span>Wafat:</span> ${datas[data].meninggal}</p>
          </div>
      </div>
      <div class="bottom-content">
          <h3>Deskripsi Singkat</h3>
          <p>${datas[data].desc}</p>
      </div>
      <div class="button-set">
          <button class="update">Update Data Deskripsi</button>
          <button class="delete">Delete Data</button>
      </div>
      `;

          const deleteButton = document.querySelector(".delete");
          deleteButton.addEventListener("click", () => {
            let containers = document.getElementById(data);
            if (containers) {
              containers.remove();
            }
            delete datas[data];
            return;
          });
          const updateButton = document.querySelector(".update");
          updateButton.addEventListener("click", () => {
            if (updateButton) {
              datas[data].desc = prompt("Silakan isi : ")
            }
          });
          break;
        }
      }
    });

    // Memberi event click pada home-button
    const homeButton = document.querySelector("#home-button");
    const addButton = document.querySelector("#add-pahlawan");
    const addPage = document.querySelector("#add-page");

    homeButton.addEventListener("click", () => {
      mainPage.removeAttribute("style");
      const detail = document.querySelector("#detail");
      detail.innerHTML = "";
      detail.setAttribute("style", "display: none");
      addPage.setAttribute("style", "display: none");
    });

    // Memberi event click pada add buton
    addButton.addEventListener("click", () => {
      mainPage.setAttribute("style", "display: none");
      addPage.removeAttribute("style");
      detail.setAttribute("style", "display: none");
    });

    // function submitForm(event) {
    //   event.preventDefault();
    // }

    // const submitButton = document.querySelector("#submit");
    // submitButton.addEventListener("onsubmit", (event) => {
    //   event.preventDefault();
    // });

    container.appendChild(card);

    if (count % 4 === 0) {
      gallery.appendChild(container);
      container = document.createElement("div");
      container.setAttribute("class", "container");
    }
  }
  gallery.appendChild(container);
}
SERC.oninput = (event) => {
  dataConverter = {};
  let containers = document.getElementById("gallery");
  if (containers) {
    containers.innerHTML = '<h2 class="gallery-title">Profile Pahlawan</h2>';
  }
  for (let key in datas) {
    if (key.toLowerCase().includes(SERC.value.toLowerCase())) {
      dataConverter[key] = {
        id: datas[key].id,
        tempatLahir: datas[key].tempatLahir,
        tanggalLahir: datas[key].tanggalLahir,
        meninggal: datas[key].meninggal,
        img: datas[key].img,
        desc: datas[key].desc,
      };
    }
  }
  webdata();
};
webdata();

function addtable(){
  const nama = document.getElementById("nama").value;
  const tempatlahir = document.getElementById("tempatlahir").value;
  const tanggallahir = document.getElementById("tanggallahir").value;
  const wafat = document.getElementById("wafat").value;
  const imgsrc = document.getElementById("imgsrc").value;
  const deskripsi = document.getElementById("deskripsi").value;
  datas[nama] = {
    id: nama,
    tempatLahir: tempatlahir,
    tanggalLahir: tanggallahir,
    meninggal: wafat,
    img: imgsrc,
    desc: deskripsi,
  }
  console.log(datas[nama])
}

function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
  let containers = document.getElementById("gallery");
  if (containers) {
    containers.innerHTML = '<h2 class="gallery-title">Profile Pahlawan</h2>';
  }
  webdata();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);