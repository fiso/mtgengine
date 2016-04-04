"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaCrypt extends Card {
  constructor(game) {
    super(game, "Mana Crypt", "Judge Gift Program", "pJGP");
  }
}

module.exports = ManaCrypt;
