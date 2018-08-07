"use strict";
const Constants = require ("../../../Constants");
const CircularLogicBase = require("../setVMA/CircularLogic");

class CircularLogic extends CircularLogicBase {
  constructor (game) {
    super(game, "Circular Logic", "World Championship Decks 2002", "WC02");
  }
}

module.exports = CircularLogic;
