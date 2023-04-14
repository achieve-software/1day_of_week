let day = new Date().getDay(); // bugünün haftanın kaçıncı günü olduğunu alır
switch (day) {
  case 1:
    console.log("Pazartesi");
    break;
  case 2:
    console.log("Salı");
    break;
  case 3:
    console.log("Çarşamba");
    break;
  case 4:
    console.log("Perşembe");
    break;
  case 5:
    console.log("Cuma");
    break;
  default:
    console.log("Hafta sonu");
}
