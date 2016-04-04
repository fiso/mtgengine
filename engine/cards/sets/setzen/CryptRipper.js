"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CryptRipper extends Card {
  constructor(game) {
    super(game, "Crypt Ripper", "Zendikar", "ZEN");
  }
}

module.exports = CryptRipper;
