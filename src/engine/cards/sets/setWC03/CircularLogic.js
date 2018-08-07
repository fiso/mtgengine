"use strict";
const Constants = require ("../../../Constants");
const CircularLogicBase = require("../setVMA/CircularLogic");

class CircularLogic extends CircularLogicBase {
  constructor (game) {
    super(game, "Circular Logic", "World Championship Decks 2003", "WC03");
  }
}

module.exports = CircularLogic;
