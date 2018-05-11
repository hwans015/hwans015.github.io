var my_zodiac;

var rat_years = ['1912', '1924', '1936', '1948', '1960', '1972', '1984', '1996', '2008'];
var ox_years = ['1913', '1925', '1937', '1949', '1961', '1973', '1985', '1997', '2009'];
var tiger_years = ['1914', '1926', '1938', '1950', '1962', '1974', '1986', '1998', '2010'];
var rabbit_years = ['1915', '1927','1939', '1951', '1963', '1975', '1987', '1999', '2011'];
var dragon_years = ['1916', '1928', '1940', '1952', '1964', '1976', '1988', '2000', '2012'];
var snake_years = ['1917', '1929', '1941', '1953', '1965', '1977', '1989', '2001', '2013'];
var horse_years = ['1918', '1930', '1942', '1954', '1966', '1978', '1990', '2002', '2014'];
var sheep_years = ['1919', '1931', '1943', '1955', '1967', '1979', '1991', '2003', '2015'];
var monkey_years = ['1920','1932', '1944', '1956', '1968', '1980', '1992', '2004', '2016'];
var rooster_years = ['1921', '1933', '1945', '1957', '1969', '1981', '1993', '2005', '2017'];
var dog_years = ['1922', '1934', '1946', '1958', '1970', '1982', '1994', '2006', '2018'];
var pig_years = ['1923', '1935', '1947', '1959', '1971', '1983', '1995', '2007', '2019'];


function findZodiac() {
  var selected_year = document.getElementById("year_select").value;

  if (rat_years.includes(selected_year)) {
    my_zodiac = 'rat';
  }
  if (ox_years.includes(selected_year)) {
    my_zodiac = 'ox';
  }
  if (tiger_years.includes(selected_year)) {
    my_zodiac = 'tiger';
  }
  if (rabbit_years.includes(selected_year)) {
    my_zodiac = 'rabbit';
  }
  if (dragon_years.includes(selected_year)) {
    my_zodiac = 'dragon';
  }
  if (snake_years.includes(selected_year)) {
    my_zodiac = 'snake';
  }
  if (horse_years.includes(selected_year)) {
    my_zodiac = 'horse';
  }
  if (sheep_years.includes(selected_year)) {
    my_zodiac = 'sheep';
  }
  if (monkey_years.includes(selected_year)) {
    my_zodiac = 'monkey';
  }
  if (rooster_years.includes(selected_year)) {
    my_zodiac = 'rooster';
  }
  if (dog_years.includes(selected_year)) {
    my_zodiac = 'dog';
  }
  if (pig_years.includes(selected_year)) {
    my_zodiac = 'pig';
  }

  console.log(my_zodiac);

  displaySign();

}

function displaySign() {
  var result = document.getElementById('result');
  result.innerHTML = 'Your sign is ' + my_zodiac + ".";

  randomImg(my_zodiac);
}

function randomImg(sign){
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    var imgName = randomNumber + ".png";
    console.log("images" + "/" + imgName );
    document.getElementById("stamp").src= "images" + "/" + sign + "/"+ imgName ;
 }


var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

