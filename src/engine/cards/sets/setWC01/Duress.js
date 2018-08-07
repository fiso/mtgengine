"use strict";
const Constants = require ("../../../Constants");
const DuressBase = require("../setM19/Duress");

class Duress extends DuressBase {
  constructor (game) {
    super(game, "Duress", "World Championship Decks 2001", "WC01");
  }
}

module.exports = Duress;
