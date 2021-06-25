export const departments = [
  {
    id: "presiden",
    title: "Presiden",
    type: "Pengurus Inti",
    core: [{name: "Fadhil Arif Muhammad", role: "Presiden"}],
    task: "Pengambil kebijakan tertinggi serta bertanggung jawab akan segala kegiatan dan aktivitas BEM FILKOM UB yang menjalankan fungsi kepemimpinan secara umum.",
  },
  {
    id: "wakilpresiden",
    title: "Wakil Presiden",
    type: "Pengurus Inti",
    core: [{name: "Tiara Sri Mulati", role: "Wakil Presiden"}],
    task: "Mendampingi dan membantu Presiden BEM dalam menjalankan tugasnya serta menggantikan fungsi dan peran Presiden BEM jika berhalangan. Wakil Presiden BEM juga bertanggung jawab akan segala kegiatan dan aktivitas BEM FILKOM UB bersama Presiden BEM.",
  },
  {
    id: "psdi",
    title: "Pengembangan Sumber Daya Internal",
    type: "Pengurus Inti",
    core: [
      {name: "Onky Soerya Nugroho Utomo", role: "Koordinator PSDI"},
      {name: "Carly Vyoletta Siagian", role: "Wakil Koordinator PSDI"},
      {name: "Sarah Uli Octavia", role: "Anggota PSDI"},
      {name: "Rafly Dwi Marzuq", role: "Anggota PSDI"},
      {name: "Alizza Iman R", role: "Anggota PSDI"},
      {name: "Samuel Andika", role: "Anggota PSDI"},
      {name: "Ferrinda Aprilia", role: "Anggota PSDI"},
      {name: "Khadija Pohan", role: "Anggota PSDI"},
      {name: "Yesaya Vito", role: "Anggota PSDI"},
    ],
    task: "Melakukan fungsi monitoring dan evaluasi terhadap kinerja dan kualitas sumber daya manusia BEM FILKOM UB. Selain itu PSDI juga bertugas sebagai inisiator dari peningkatan kapabilitas (upgrading) dan peningkatan solidaritas (bonding) seluruh sumber daya manusia BEM FILKOM UB berdasarkan hasil monitoring dan evaluasi.",
    programs: [
      "TRAINING ORGANIZATION",
      "UPGRADING",
      "BONDING SESSION",
      "MOTION",
    ],
  },
  {
    id: "menko",
    title: "Menko dan Direktur Internal",
    type: "Pengurus Inti",
    core: [
      {name: "Dwinanda Romolo", role: "Direktur Internal"},
      {name: "M Guntur Dermawan Amin", role: "Menko Kepemudaan"},
      {name: "Rahadian Fitra Syakura", role: "Menko Sosial Politik"},
    ],
    task: "Bertugas melakukan monitoring dan evaluasi terhadap program kerja kementrian atau kebiroan BEM FILKOM agar tercapainya keselarasan",
  },
  {
    id: "psdm",
    title: "Pengembangan Sumber Daya Manusia",
    type: "Kementerian",
    core: [
      {name: "Huriyah Anisah Nur Humairoh", role: "Dirjen Kaderisasi"},
      {name: "M Syukran Ni’matullah", role: "Menteri PSDM"},
      {name: "Andriko Fajar Prakoso", role: "Dirjen P2M"},
    ],
    task: "Pengembangan Sumber Daya Manusia atau PSDM merupakan kementerian yang mengembangkan potensi serta karakter mahasiswa FILKOM guna memberi bekal kepada Mahasiswa baik pra kuliah, saat kuliah dan pasca kuliah. Selain itu, PSDM juga bertanggung jawab mempersiapkan sumber daya mahasiswa yang potensial menjadi penerus masa depan.",
    programs: [
      "PK2MABA & STARTUP ACADEMY",
      "LOKAKARYA KADERISASI",
      "STAFF MUDA BEM FILKOM",
      "INAUGURASI FILKOM",
      "LKMM-TM",
      "LEADER OF TOMORROW",
      "FILKOM Softskill Campaign",
    ],
    staff: true,
  },
  {
    id: "perhub",
    title: "Perhubungan",
    type: "Kementerian",
    core: [
      {name: "Fidelis Farren Pradipto", role: "Dirjen Dalam Negeri"},
      {
        name: "M Hardian Ghaffari Nasution",
        role: "Menteri Perhubungan",
      },
      {name: "Rifki Karim Ramadhan", role: "Dirjen Luar Negeri"},
    ],
    task: "Perhubungan merupakan kementrian yang menghubungkan BEM FILKOM dengan stakeholder yang berada didalam maupun luar lingkup Fakultas. Perhubungan juga menjadi jembatan monitoring, kolaborasi dan konsolidasi antara BEM FILKOM dengan eksternal agar terciptanya kesinergisan irama dan meningkatkan rasa kekeluargaan bagi seluruh elemen kemahasiswaan.",
    programs: [
      "GRAND LAUNCHING LEMBAGA DAN KOMUNITAS FILKOM",
      "SAMBANG",
      "FORUM KOORDINASI",
      "LEMBAGA D-DAY",
      "AUDIT CITRA INTERNAL (ACI)",
      "Filkom Anniversary Festival",
      "STUDI EKSKURSI",
      "STUDI BANDING",
      "FILKOM VIRTUAL OPEN DAY",
      "AUDIT CITRA EKSTERNAL (ACE)",
    ],
    staff: true,
  },
  {
    id: "kmb",
    title: "Karir dan Minat Bakat",
    type: "Kementerian",
    core: [
      {name: "Lenny Raufi Syafitri", role: "Dirjen K2P"},
      {
        name: "Reza Syahputra",
        role: "Menteri KMB",
      },
      {name: "Wisnumurti", role: "Dirjen Ekraf"},
    ],
    task: "Karir & Minat Bakat merupakan kementerian yang bertujuan untuk melakukan pengembangan dan pengawalan Mahasiswa terhadap karir dan juga minat bakat. Dalam mendukung hal tersebut kementrian ini juga melakukan apresiasi terhadap capaian minat bakat dari Mahasiswa.",
    programs: [
      "House of Technology 4.0",
      "Career Academy",
      "Portal Career",
      "Mawapres FILKOM",
      "Financial Project",
      "Partnership",
      "Seminar Wirausaha Kreatif",
    ],
    staff: true,
  },
  {
    id: "kastrat",
    title: "Kajian dan Aksi Strategis",
    type: "Kementerian",
    core: [
      {name: "M Fadhel Haidar", role: "Dirjen Eksternal"},
      {
        name: "Reza Satya Mahesa",
        role: "Menteri Kastrat",
      },
      {name: "Farid Syauqi Nirwan", role: "Dirjen Internal"},
    ],
    task: "Bertanggungjawab dalam mengawal isu-isu strategis dengan melakukan pencerdasan, propaganda, dan pengkajian terhadap isu di ranah universitas, regional, nasional, maupun internasional.",
    programs: ["APANI", "Router", "KPK", "Wani Penat", "Bang Sambat"],
    staff: true,
  },
  {
    id: "sosling",
    title: "Sosial dan Lingkungan",
    type: "Kementerian",
    core: [
      {name: "Ghina Zahirah", role: "Dirjen Lingkungan Hidup"},
      {
        name: "Hilmy Saeful Fatah",
        role: "Menteri Sosling",
      },
      {name: "Dandy Ramadhany", role: "Dirjen Sosial Masyarakat"},
    ],
    task: "Sosial dan Lingkungan bertanggung jawab dibidang Pelayanan Masyarakat serta Lingkungan Hidup dengan melakukan pengembangan melalui program dan aksi nyata yang dapat dilakukan seperti mencerdaskan masyarakat khususnya yang membutuhkan dibidang pendidikan, peduli lingkungan hidup bermasyarakat, aktif dalam bantuan sosial serta pengabdian kepada masyarakat, serta menciptakan kepedulian mahasiswa terhadap masyarakat.",
    programs: [
      "FILKOM Abdimasa",
      "Social Feeds",
      "#WETALK",
      "FILKOM Peduli",
      "Environment Corner (E-Co)",
      "Envirocative ( Environment Activities )",
    ],
    staff: true,
  },
  {
    id: "advokesma",
    title: "Advokasi dan Kesejahteraan Mahasiswa",
    type: "Kementerian",
    core: [
      {name: "Nadya Nur Fadhila", role: "Dirjen Advokasi dan Kebijakan Kampus"},
      {
        name: "Chusna Farida Islama",
        role: "Menteri Advokesma",
      },
      {
        name: "Kautsarratu Athaya Zayyannarantis",
        role: "Dirjen Kesejahteraan Mahasiswa",
      },
    ],
    task:
      "Bertanggungjawab dalam melakukan kegiatan advokasi terhadap permasalahan mahasiswa kepada pihak terkait sebagai bentuk perjuangan aspirasi mahasiswa. Selain itu Advokesma juga bertugas utnuk menghimpun permasalahan dan menyampaikan informasi terkait kesejahteraan mahasiswa." +
      "Mengkaji kebijakan kampus FILKOM UB dan melakukan fungsi advokasi kepada pihak terkait akan suatu permasalahan dengan tujuan memperjuangkana aspirasi mahasiswa." +
      "Menghimpun permasalahan mahasiswa secara komprehensif dan menyampiakan informasi-informasi yang terkait dengan kondisi kesejahteraan mahasiswa.",
    programs: [
      "Kabar Advokesma",
      "Advokasi Turun Tangan",
      "Dewa Ngoding",
      "Crisis Center UKT",
      "Suarkan Asa",
      "Beasiswa Corner",
      "Beasiswa Solidaritas FILKOM",
      "Halo Maba",
    ],
    staff: true,
  },
  {
    id: "pit",
    title: "Pengembangan Informasi dan Teknologi",
    type: "Kebiroan",
    core: [
      {
        name: "Nourman Hajar",
        role: "Kabiro PIT",
      },
      {name: "Harun Ulum Fajar", role: "Wakabiro PIT"},
    ],
    task: "PIT bertanggung jawab dalam implementasi teknologi informasi dalam penyebaran informasi terkait BEM FILKOM UB. Bentuk implementasinya berupa maintenance website BEM FILKOM UB serta menunjang kebutuhan program kerja kementrian lain dibidang IT.",
    programs: [
      "BEM Website Maintenance",
      "WEB Event Request",
      "BEM Apps",
      "Workshop Internal",
    ],
    staff: true,
  },
  {
    id: "adkeu",
    title: "Administrasi Kesekretariatan dan Keuangan",
    type: "Kebiroan",
    core: [
      {
        name: "Anatasia Griselda Ferina Budiargo",
        role: "Kabiro Adkeu",
      },
      {name: "Devina Dwi Pratiwi", role: "Wakabiro Adkeu"},
    ],
    task: "Administrasi dan keuangan adalah biro yang bertanggung jawab terkait kegiatan administrasi dalam bentuk proposal, penyuratan dan inventaris yang ada di BEM. Bertanggung jawab tentang kelola keuangan internal BEM serta pengecekkan segala bentuk anggaran yang ditujukan kepada Dekanat. Menjadi jembatan informasi program kerja lembaga FILKOM sebagai penunjang kolaborasi bersama Dekanat.",
    programs: [
      "Pengelolaan dan Pengarsipan Surat, Proposal, dan LPJ",
      "Laporan Keuangan Internal",
      "Laporan Keuangan Eksternal",
    ],
    staff: true,
  },
  {
    id: "medkominfo",
    title: "Media Komunikasi dan Informasi",
    type: "Kebiroan",
    core: [
      {
        name: "Randy Christian Saputra",
        role: "Wakabag Media Kreatif"
      },
      {
        name: "M Ibrahim Kumail",
        role: "Kabiro Medkominfo",
      },
      {
        name: "Maria Imaculata Astrid W",
        role: "Wakabag Media Informasi",
      },
    ],
    task: "Media Komunikasi dan Informasi adalah biro yang menunjang BEM FILKOM dalam bidang publikasi. Bertanggung jawab atas pengelolaan media sosial yang ada di BEM FILKOM serta membantu seluruh kementrian dan kebiroan dalam hal penyaluran informasi dan komunikasi.",
    programs: [
      "Grand Launching BEM FILKOM",
      "Committee Profile",
      "Company Profile",
      "Podcast Jowoan",
      "FILKOM Your Page",
      "Social Media Maintenance",
      "Live Report Kegiatan",
      "Humas dan Poster Partner",
      "Rekam Jejak ",
      "Monthly Trivia Content",
    ],
    staff: true,
  },
];
