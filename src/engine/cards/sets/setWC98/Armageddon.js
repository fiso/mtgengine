"use strict";
const Constants = require ("../../../Constants");
const ArmageddonBase = require("../setA25/Armageddon");

class Armageddon extends ArmageddonBase {
  constructor (game) {
    super(game, "Armageddon", "World Championship Decks 1998", "WC98");
  }
}

module.exports = Armageddon;
