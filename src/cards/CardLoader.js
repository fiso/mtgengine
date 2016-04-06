"use strict";
const Utils = require("../Utils");

// const sets = require("./sets/sets");

class CardLoader {
  constructor (cardName, setName, setCode, game) {
    let safeCardName = this.getSafeCardName(cardName);
    let importString = "./sets/set" + setCode + "/" + safeCardName;
    let cardClass = require(importString);
    let card = new cardClass(game, cardName, setName, setCode);
    this._promise = card.ready();
  }

  ready () {
    return this._promise;
  }

  getSafeCardName (cardName) {
    // This code must mirror the functionality in buildstubs.py
    let illegalCharacters = " ?!()\",.-'®:&";
  	let characterReplacements = {
  		"û": "u",
  		"ú": "u",
  		"ù": "u",
  		"â": "a",
  		"á": "a",
  		"à": "a",
  		"ê": "e",
  		"é": "e",
  		"è": "e",
  		"î": "i",
  		"í": "i",
  		"ì": "i",
  		"ö": "o",
  		"Æ": "Ae"
  	};

    for (let char of illegalCharacters) {
      cardName = Utils.replaceAll(cardName, char, "");
    }

    for (let dictionaryEntry in characterReplacements) {
      cardName = Utils.replaceAll(cardName, dictionaryEntry, characterReplacements[dictionaryEntry]);
    }

    // One card in all of Magic starts with a digit - 1996 World Champion
  	if (Utils.isNumeric(cardName[0])) {
  		cardName = "_" + cardName;
    }

  	return cardName
  }
}

module.exports = CardLoader;