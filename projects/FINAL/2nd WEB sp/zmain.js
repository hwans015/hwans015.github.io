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


