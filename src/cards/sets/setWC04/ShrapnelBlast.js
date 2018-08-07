"use strict";
const Constants = require ("../../../Constants");
const ShrapnelBlastBase = require("../setDDU/ShrapnelBlast");

class ShrapnelBlast extends ShrapnelBlastBase {
  constructor (game) {
    super(game, "Shrapnel Blast", "World Championship Decks 2004", "WC04");
  }
}

module.exports = ShrapnelBlast;
