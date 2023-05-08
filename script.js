function generatePassword(passwordLength){
    let usedRandomizeChar = "Qvo@l+HwXC35OdGUe!D-pqW*zgyi%6I#fE7RFPKVaAcBn8ShsZL9YM0jJ1T=urmkt4Nb2$x";
    let generatedPassword = "";
    for(let x = 0, y = usedRandomizeChar.length; x < passwordLength; x++){
        generatedPassword += usedRandomizeChar.charAt(Math.floor(Math.random() * y))
    }
    return generatedPassword;
}

document.querySelector("button").addEventListener("click", ()=>{
    document.querySelector("#password-value").value = generatePassword(parseInt(document.querySelector("#length-password").value))
});