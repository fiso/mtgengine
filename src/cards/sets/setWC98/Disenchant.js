"use strict";
const Constants = require ("../../../Constants");
const DisenchantBase = require("../setA25/Disenchant");

class Disenchant extends DisenchantBase {
  constructor (game) {
    super(game, "Disenchant", "World Championship Decks 1998", "WC98");
  }
}

module.exports = Disenchant;
