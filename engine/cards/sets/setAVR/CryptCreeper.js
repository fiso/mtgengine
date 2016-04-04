"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CryptCreeper extends Card {
  constructor(game) {
    super(game, "Crypt Creeper", "Avacyn Restored", "AVR");
  }
}

module.exports = CryptCreeper;
