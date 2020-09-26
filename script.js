function mentorProgrammer(nama, status, asal) {
    nama()
    status()
    asal()
}
const nama = () => console.log('Nama Mentor Wandi Pratama');
const status = () => console.log('Status nya Santri');
const asal = () => console.log('Berasal dari kota Prabumulih');
mentorProgrammer(nama, status, asal)