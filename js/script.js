function encrypt(){
  var plaintext = document.getElementById("plaintext").value;
  var key = document.getElementById("key").value;
  var ciphertext = '';
  var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  for (i=0; i<plaintext.length; i++){
    console.log(i);
    console.log(letters[i]);
  ciphertext += letters[((letters.indexOf(plaintext[i]) + key)+260)%26];
  }
  console.log(ciphertext);
}
function decrypt(){
  var ciphertext = document.getElementById("ciphertext").value;
  var key = document.getElementById("decKey").value;
  var plaintext = '';
  var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  for (i=0; i<ciphertext.length; i++){
    plaintext += letters[((letters.indexOf(ciphertext[i]) - key)+260)%26];
  }
  console.log(plaintext);
}
