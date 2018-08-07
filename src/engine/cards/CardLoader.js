/* global requirejs */
'use strict';
const Utils = require('../Utils');

class CardLoader {
  constructor (cardName, setName, setCode, game) {
    const safeCardName = this.getSafeCardName(cardName);

    if (typeof window !== 'undefined') {
      const importString = `js/bundles/set${setCode}/set`;
      this._promise = new Promise((resolve, reject) => {
        requirejs([importString], function (set) {
          const CardClass = window.mtgSets[`set${setCode}`][safeCardName];
          const card = new CardClass(game, cardName, setName, setCode);
          card.ready().then(() => {
            resolve(card);
          });
        });
      });
    } else {
      const importString = `./sets/set${setCode}/${safeCardName}`;
      const CardClass = require(importString);
      const card = new CardClass(game, cardName, setName, setCode);
      this._promise = card.ready();
    }
  }

  ready () {
    return this._promise;
  }

  getSafeCardName (cardName) {
    // This code must mirror the functionality in buildstubs.py
    const illegalCharacters = " ?!()\",.-'®:&/";
    const characterReplacements = {
      'û': 'u',
      'ú': 'u',
      'ù': 'u',
      'â': 'a',
      'á': 'a',
      'à': 'a',
      'ê': 'e',
      'é': 'e',
      'è': 'e',
      'î': 'i',
      'í': 'i',
      'ì': 'i',
      'ö': 'o',
      'Æ': 'Ae',
    };

    for (const char of illegalCharacters) {
      cardName = Utils.replaceAll(cardName, char, '');
    }

    for (const dictionaryEntry in characterReplacements) {
      cardName = Utils.replaceAll(cardName, dictionaryEntry,
        characterReplacements[dictionaryEntry]);
    }

    // One card in all of Magic starts with a digit - 1996 World Champion
    if (Utils.isNumeric(cardName[0])) {
      cardName = '_' + cardName;
    }

    return cardName;
  }
}

module.exports = CardLoader;
