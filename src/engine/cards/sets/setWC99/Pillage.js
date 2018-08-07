"use strict";
const Constants = require ("../../../Constants");
const PillageBase = require("../setA25/Pillage");

class Pillage extends PillageBase {
  constructor (game) {
    super(game, "Pillage", "World Championship Decks 1999", "WC99");
  }
}

module.exports = Pillage;
