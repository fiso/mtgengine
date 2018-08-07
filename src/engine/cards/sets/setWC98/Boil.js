"use strict";
const Constants = require ("../../../Constants");
const BoilBase = require("../setMP2/Boil");

class Boil extends BoilBase {
  constructor (game) {
    super(game, "Boil", "World Championship Decks 1998", "WC98");
  }
}

module.exports = Boil;
