import React, { useEffect, useState } from "react";

const School = () => {
  const [studentsData, setStudentsData] = useState(null);

  useEffect(() => {
    // Fungsi untuk mengambil data siswa dari API
    const fetchStudents = async () => {
      try {
        const response = await fetch(
          "http://ecocim-backend-theone.beit.co.id/api/ManualConfig/TestBEIT"
        );
        const data = await response.json();
        console.log(data);

        // Lakukan pemrosesan data dan pengelompokkan sesuai aturan
        const groupedStudents = groupStudentsByRules(data);

        setStudentsData(groupedStudents);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchStudents();
  }, []);

  // Fungsi untuk mengelompokkan siswa berdasarkan aturan
  const groupStudentsByRules = (data) => {
    const { listNama, listNilai } = data;
    const result = {
      class1: { students: [], marrying: 0, cursed: 0 },
      class2: { students: [], marrying: 0, cursed: 0 },
      class3: { students: [], marrying: 0, cursed: 0 },
      class4: { students: [], marrying: 0, cursed: 0 },
      class5: { students: [], marrying: 0, cursed: 0 },
      specialClass: { students: [], marrying: 0, cursed: 0 },
    };

    for (let i = 0; i < listNama.length; i++) {
      const name = listNama[i];
      const score = listNilai[i];
      const isPrime = isPrimeNumber(score);

      const classIndex = Math.floor(score / 10) + 1;
      const isMarriage = score % 7 === 0;
      const studentInfo = { name, score };

      result[`class${classIndex}`].students.push(studentInfo);

      if (name.includes("C") && name.includes("O")) {
        result.specialClass.students.push(studentInfo);
        if (isMarriage) result.specialClass.marrying++;
      } else if (isPrime) {
        const currentMonth = new Date().getMonth() + 1; // 0-based month
        const scoreLastDigit = score % 10;

        if (scoreLastDigit === currentMonth) {
          result[`class${classIndex}`].cursed++;
        } else if (scoreLastDigit < currentMonth) {
          result[`class${classIndex}`].cursed++;
        }
      } else if (isMarriage) {
        result[`class${classIndex}`].marrying++;
      }
    }

    return result;
  };

  // Fungsi untuk memeriksa apakah sebuah angka adalah bilangan prima
  const isPrimeNumber = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }

    return true;
  };

  return (
    <div>
      <h1>Daftar Siswa</h1>
      <h2>Kelas 1</h2>
      <p>
        Jumlah siswa yang akan menikah tahun depan:{" "}
        {studentsData && studentsData.class1.marrying}
      </p>
      <p>
        Jumlah siswa yang akan mati tahun ini:{" "}
        {studentsData && studentsData.class1.cursed}
      </p>
      {/* Tampilkan daftar siswa di Kelas 1 sesuai format yang Anda inginkan */}

      {/* Tampilkan informasi untuk kelas lain di sini */}

      <h2>Kelas Khusus</h2>
      <p>
        Jumlah siswa yang akan menikah tahun depan:{" "}
        {studentsData && studentsData.specialClass.marrying}
      </p>
      <p>
        Jumlah siswa yang akan mati tahun ini:{" "}
        {studentsData && studentsData.specialClass.cursed}
      </p>
      <ul>
        {studentsData &&
          studentsData.class1 &&
          studentsData.class1.students.map((student, index) => (
            <li key={index}>
              {student.name} - {student.score}
            </li>
          ))}
      </ul>
      {/* Tampilkan daftar siswa di Kelas Khusus sesuai format yang Anda inginkan */}
    </div>
  );
};

export default School;
