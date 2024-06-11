var arr = [
  {
      userName: "Test",
      lastName: "Test",
      email: "test.test@gmail.com"
  },
  {
      userName: "Dmitro",
      lastName: "Porohov",
      email: "dmitro.porohov@yahoo.com"
  },
  {
      userName: "Andrii",
      lastName: "",
      email: "andrii@mail.ru" // Нам такі не підходять
  },
];

// Перевірка email
const emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

// Фільтрування масиву
const trustedEmails = arr
.map(item => item.email)
.filter(email => emailRegex.test(email));

console.log(trustedEmails);