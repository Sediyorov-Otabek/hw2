{
  // 1 masala
  function day(n) {
    switch (n) {
      case 1:
        return "Dushanba";
      case 2:
        return "seshanba";
      case 3:
        return "chorshanba";
      case 4:
        return "payshanba";
      case 5:
        return "juma";
      case 6:
        return "shanba";
      case 7:
        return "yakshanba";
      default:
        return "bunday kun yo'q";
    }
  }
  console.log(day(5));
}
{
  // 2 masala
  function ball(n) {
    switch (n) {
      case 1:
        return "yomon";
      case 2:
        return "qoniqarsiz";
      case 3:
        return "qoniqarli";
      case 4:
        return "yaxshi";
      case 5:
        return "alo";

      default:
        return "xato";
    }
  }
  console.log(ball(5));
}
{
  // 3 masala
  function month(n) {
    switch (n) {
      case 1:
      case 2:
      case 12:
        return "qish";
      case 3:
      case 4:
      case 5:
        return "bahor";
      case 6:
      case 7:
      case 8:
        return "yoz";
      case 9:
      case 10:
      case 11:
        return "summer";

      default:
        return "xato";
    }
  }
  console.log(month(5));
}
{
  //  4 masala
  function month(n) {
    switch (n) {
      case 4:
      case 6:
      case 9:
      case 11:
        return "30 kun bor";
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return "31 kun bor";
      case 2:
        return "28 kun bor 4 yilda 1marta 29kun";

      default:
        return "xato";
    }
  }
  console.log(month(5));
}
{
  // 5 masala
  function son(a, b, amal) {
    switch (amal) {
      case 1:
        return a + b;

      case 2:
        return a - b;
      case 3:
        return a * b;
      case 4:
        return a / b;

      default:
        return "4 gacha raqam kiritilsin";
    }
  }
  console.log(son(5, 5, 4));
}
{
  // 6 masala
  function metr(a, b) {
    switch (b) {
      case 1:
        return `${a * 0.1} dm`;

      case 2:
        return `${a * 1000} km`;
      case 3:
        return `${(a = a)} m`;
      case 4:
        return `${a * 0.001} mm`;
      case 5:
        return `${a * 0.01} sm`;

      default:
        return "5 gacha raqam kiritilsin";
    }
  }
  console.log(metr(70, 3));
}
{
  // 7 masala
  function kilo(a, b) {
    switch (b) {
      case 1:
        return `${a} kg = ${a} kg`;

      case 2:
        return `${a} mg = ${a * 0.000_001} kg`;
      case 3:
        return ` ${a} g = ${a * 0.001} kg`;
      case 4:
        return ` ${a} t = ${a * 1000} kg`;
      case 5:
        return `${a} st = ${a * 100} kg`;

      default:
        return "5 gacha raqam kiritilsin";
    }
  }
  console.log(kilo(5, 5));
}
{
  // 8 masala
  function day(n) {
    switch (n) {
      case 1:
        return "yanvar";
      case 2:
        return "fevral";
      case 3:
        return "mart";
      case 4:
        return "aprel";
      case 5:
        return "may";
      case 6:
        return "iyun";
      case 7:
        return "iyul";
      case 8:
        return "avgust";
      case 9:
        return "september";
      case 10:
        return "october";
      case 11:
        return "november";
      case 12:
        return "december";
      default:
        return "bunday oy yo'q";
    }
  }
  console.log(day(5, 5));
}
{
  // 9 masala
  function day(a, n) {
    switch (n) {
      case 1:
        return `yanvar oyining ${a} kuni`;
      case 2:
        return `fevral oyining ${a} kuni`;
      case 3:
        return `mart oyining ${a} kuni`;
      case 4:
        return `aprel oyining ${a} kuni`;
      case 5:
        return `may oyining ${a} kuni`;
      case 6:
        return `iyun oyining ${a} kuni`;
      case 7:
        return `iyul oyining ${a} kuni`;
      case 8:
        return `avgust oyining ${a} kuni`;
      case 9:
        return `sentabr oyining ${a} kuni`;
      case 10:
        return `oktiyabr oyining ${a} kuni`;
      case 11:
        return `noyabr oyining ${a} kuni`;
      case 12:
        return `decabr oyining ${a} kuni`;
      default:
        return "bunday oy yo'q";
    }
  }
  console.log(day(5, 5));
}
{
  // 10 masala
  function robot(y, k) {
    let k=0
    switch ( y) {
      case (`s`):
       if()

      default:
        return "bunday yonalish yoq";
    }
  }
  console.log(robot( "g", 0));
}
