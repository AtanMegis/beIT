import React from "react";

const Sekolah = () => {
  const data = {
    listNama: [
      "WULUTA",
      "MAHIYA",
      "SUWUNI",
      "QUDIRI",
      "NUYOCI",
      "XEZAJO",
      "ROFAPO",
      "ZOZUHU",
      "VEJAGA",
      "KORUNU",
      "YUGECU",
      "ZONODO",
      "SITUZI",
      "XUTAHE",
      "MAROLA",
      "BIJEPA",
      "WEVEGA",
      "VIXETU",
      "LECATU",
      "FUWEFO",
      "WAKIFA",
      "KOXINE",
      "GIVAMO",
      "SIGEBE",
      "VAMENA",
      "FIMOYA",
      "SUREYA",
      "CALUJA",
      "YILEKO",
      "FEBOHU",
      "KODEKE",
      "YEDUDU",
      "JIJOLA",
      "WIZEMI",
      "HUYEQE",
      "SIGIVE",
      "TOLEJO",
      "TASOBE",
      "CEYEMU",
      "SELECO",
      "YINAVI",
      "NUSIRU",
      "JAYICE",
      "XAXILE",
      "VEWILO",
      "POGEJI",
      "YUDEMO",
      "QEMOZO",
      "SIZAGE",
      "NARIRA",
      "LENUCO",
      "JESOBO",
      "YOHOMA",
      "HOWUFE",
      "MESEMA",
      "FUMISE",
      "XUYECU",
      "MIROSO",
      "RUXIGA",
      "WEPUGE",
      "ZAWOFU",
      "SOHODO",
      "KICARA",
      "TOYEYU",
      "JAQEZE",
      "RANONO",
      "LOQIME",
      "PEPUMI",
      "POCOKE",
      "VEHUCE",
      "TUMEBI",
      "CULOFE",
      "BUZOZO",
      "DIWULO",
      "VINEKA",
      "ZAVIVA",
      "ROSEHA",
      "DUBORU",
      "FEWEJO",
      "HEQALE",
      "NIDEYA",
      "NUCIQI",
      "LEFUXE",
      "KEBAVA",
      "COLOXO",
      "KODUME",
      "XEDUVA",
      "RABUPO",
      "TALEWA",
      "BOKABE",
      "HALODU",
      "LEJAVI",
      "SOYOSI",
      "ZELOCO",
      "JEFOSA",
      "RODOVA",
      "BUSASU",
      "RELEWU",
      "ZIKOTI",
      "FOXIQA",
    ],
    listNilai: [
      92, 54, 64, 78, 73, 68, 67, 55, 68, 97, 86, 59, 62, 96, 85, 92, 72, 62,
      57, 58, 57, 76, 96, 81, 96, 79, 93, 80, 86, 90, 80, 52, 97, 62, 87, 70,
      87, 53, 94, 89, 64, 76, 92, 67, 73, 90, 72, 90, 86, 81, 57, 64, 72, 82,
      68, 99, 75, 53, 58, 69, 66, 76, 81, 97, 76, 89, 59, 53, 98, 54, 68, 69,
      72, 64, 55, 64, 85, 98, 50, 78, 68, 74, 93, 92, 93, 97, 78, 98, 95, 76,
      52, 93, 85, 71, 56, 60, 53, 58, 77, 58,
    ],
  };

  function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;

    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    return true;
  }

  const kelas = {
    Kelas1: [],
    Kelas2: [],
    Kelas3: [],
    Kelas4: [],
    Kelas5: [],
    Kelas6: [],
  };

  data.listNama.forEach((nama, index) => {
    const nilai = data.listNilai[index];

    let pesanTambahan = "";

    if (nama.includes("C") && nama.includes("O")) {
      if (nilai % 7 === 0) {
        pesanTambahan = ` akan menikah tahun depan`;
        kelas.Kelas6.push({ nama, nilai, pesanTambahan });
      }
    } else if (isPrime(nilai)) {
      const bulanMati = nilai % 10;
      pesanTambahan = ` akan meninggal di Bulan ${
        bulanMati === 0
          ? "Oktober"
          : bulanMati === 1
          ? "Januari"
          : bulanMati === 2
          ? "Februari"
          : bulanMati === 3
          ? "Maret"
          : bulanMati === 4
          ? "April"
          : bulanMati === 5
          ? "Mei"
          : bulanMati === 6
          ? "Juni"
          : bulanMati === 7
          ? "Juli"
          : bulanMati === 8
          ? "Agustus"
          : bulanMati === 9
          ? "September"
          : "Desember"
      } tahun ${
        bulanMati <= new Date().getMonth()
          ? new Date().getFullYear() + 1
          : new Date().getFullYear()
      }`;
    }

    const kelasIndex = Math.ceil(nilai / 10);
    if (kelasIndex >= 1 && kelasIndex <= 5) {
      kelas[`Kelas${kelasIndex}`].push({ nama, nilai, pesanTambahan });
    }
  });

  for (const kelasName in kelas) {
    if (kelas.hasOwnProperty(kelasName)) {
      console.log(`Kelas ${kelasName}:`);
      const kelasDetail = kelas[kelasName];
      console.log(`Jumlah Siswa: ${kelasDetail.length}`);
      console.log("Detail Siswa:");
      kelasDetail.forEach((siswa) => {
        console.log(
          `Nama: ${siswa.nama}, Nilai: ${siswa.nilai}${siswa.pesanTambahan}`
        );
      });
      console.log("\n");
    }
  }
  return <div>Sekolah</div>;
};

export default Sekolah;
