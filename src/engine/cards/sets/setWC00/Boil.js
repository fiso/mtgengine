"use strict";
const Constants = require ("../../../Constants");
const BoilBase = require("../setMP2/Boil");

class Boil extends BoilBase {
  constructor (game) {
    super(game, "Boil", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Boil;
