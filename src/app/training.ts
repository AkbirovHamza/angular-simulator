//Пункт 3

function calc(a: number, b: number): number {
  return a + b;
}

//Пункт 4

let uploadStatus: ('loading' | 'success' | 'error');

//Пункт 5

let textFormat: ('uppercase' | 'lowercase' | 'capitalize');

//Пункт 6

interface user {
  name: string;
  sureName: string;
  age: number;
  email: string;
  phoneNumber?: number;
}
 
//Пункт 7

interface userHome extends user {
  petsName: string;
  homeNumber: string;
}

//Пункт 8

function formatText(rowText: string, textFormat: ('uppercase' | 'lowercase' | 'capitalize')): string {
  if(textFormat == 'capitalize') {
    return rowText.charAt(0).toUpperCase() + rowText.slice(1);
  } else if(textFormat == 'lowercase') {
    return rowText.toLowerCase();
  } else 
    return rowText.toUpperCase();
}

//Пункт 9

function removeChar(row: string, simbol: string): string {
  return row.replace(simbol, '');
}

//Пункт 10

const arrayUsers: user[] = [
  {
    'name': 'Ivan',
    'sureName': 'Rojkov',
    'age': 18,
    'email': 'ivan@gmail.com',
    'phoneNumber': +7324243234
  },
  {
    'name': 'Alice',
    'sureName': 'Volkova',
    'age': 23,
    'email': 'alice@gmail.com',
    'phoneNumber': +7353621312
  },
  {
    'name': 'Rodion',
    'sureName': 'Babkov',
    'age': 17,
    'email': 'rodion@gmail.com',
    'phoneNumber': +7844837432
  }
]

const newArrayUsers = arrayUsers.filter(user => {
  if (user.age >= 18) {
    return true
  }
  else 
    return false
});