/* Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее. Эта функция нам пригодится для валидации формы.*/

const checkLength = (string, maxLength) => {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
};

// Строка короче 20 символов
checkLength ('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkLength ('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkLength ('проверяемая строка', 10); // false

//Функция для проверки, является ли строка палиндромом.

const checkPalindrome = (string) => {
  string = string.replaceAll(' ', '');
  string = string.toLowerCase ();

  let conversely = '';

  for (let i = string.length - 1; i >= 0; i--) {
    conversely += string[i];
  }

  return string === conversely ? 'палиндром' : 'не палиндром';
};

// Строка является палиндромом
checkPalindrome ('топот '); // true
// Несмотря на разный регистр, тоже палиндром
checkPalindrome ('ДовОд'); // true
// Это не палиндром
checkPalindrome ('Кекс'); // false

//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:

const getNumber = (string) => {
  let result = '';

  for (let i = 0; i <= string.length; i++) {
    if (Number.isNaN(parseInt(string[i], 10)) === false) {
      result += string[i];
    }
  }
  return result === '' ? NaN : Number(result);
};

getNumber('2023 год');            // 2023
getNumber('ECMAScript 2022');     // 2022
getNumber('1 кефир, 0.5 батона'); // 105
getNumber('агент 007');           // 7
getNumber('а я томат');           // NaN

