const utilities = {
  speak:(twiml, textToSpeak, contentLanguage = "pt-BR")=>{
    twiml.say(textToSpeak, {
      voice: "alice",
      language: contentLanguage
    });
  },
  removeSpecialChars:(text)=>{
    return text.replace(/[^0-9a-z]/gi, '');
  }
}

module.exports = utilities;
