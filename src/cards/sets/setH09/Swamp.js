"use strict";
const Constants = require ("../../../Constants");
const SwampBase = require("../setC18/Swamp");

class Swamp extends SwampBase {
  constructor (game) {
    super(game, "Swamp", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = Swamp;
