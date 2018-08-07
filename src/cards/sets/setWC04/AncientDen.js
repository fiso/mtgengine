"use strict";
const Constants = require ("../../../Constants");
const AncientDenBase = require("../setTD2/AncientDen");

class AncientDen extends AncientDenBase {
  constructor (game) {
    super(game, "Ancient Den", "World Championship Decks 2004", "WC04");
  }
}

module.exports = AncientDen;
