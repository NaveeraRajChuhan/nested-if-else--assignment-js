var age = +prompt("enter your age");
if (age <= 100 && age >= 0) {
  if (age >= 80)
    document.write(
      "you are too much old but if you want license so we will give you"
    );
  else if (age >= 70) {
    document.write(
      "you are too  old but if you want license so we will give you"
    );
  } else if (age >= 18) {
    document.write("you can get a driving license");
  } else {
    document.write("you cannot get a driving license");
  }
} else {
    document.write("Masha Allah ap zinda hain gari chala k mharna q hai");

}
