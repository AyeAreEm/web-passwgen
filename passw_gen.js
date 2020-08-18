function generatePassword(_isWithLetters, _isWithUpperCase, _isWithNumbers, _isWithSpecial, _numlen) {
    var _lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var _upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var _numbers = "0123456789";
    var _special = "!@#%^&*()_-+={}[]:'/?\$|;.,";

    var _allowedChars = "";

    _allowedChars += (_isWithLetters ? _lowerCaseLetters : '');
    _allowedChars += (_isWithUpperCase ? _upperCaseLetters : '');
    _allowedChars += (_isWithNumbers ? _numbers : '');
    _allowedChars += (_isWithSpecial ? _special : '');

    

    var _result = "";

    for (var i = 0, n = _allowedChars.length; i < _numlen; ++i) {
        _result += _allowedChars.charAt(Math.floor(Math.random() * n));
    }

    return _result;
}

var weak = generatePassword(true, true, true, true, 12);
var rec = generatePassword(true, true, true, true, 15);
var strong = generatePassword(true, true, true, true, 18);
var easy = generatePassword(true, true, false, false, 16);

document.getElementById("weak").innerHTML = weak;
document.getElementById("rec").innerHTML = rec;
document.getElementById("strong").innerHTML = strong;
document.getElementById("easyRead").innerHTML = easy;

function refreshpass() {
    weak = generatePassword(true, true, true, true, 12);
    rec = generatePassword(true, true, true, true, 15);
    strong = generatePassword(true, true, true, true, 18);
    easy = generatePassword(true, true, false, false, 16);

    document.getElementById("weak").innerHTML = weak;
    document.getElementById("rec").innerHTML = rec;
    document.getElementById("strong").innerHTML = strong;
    document.getElementById("easyRead").innerHTML = easy;
}
