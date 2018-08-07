"use strict";
const Constants = require ("../../../Constants");
const RancorBase = require("../setA25/Rancor");

class Rancor extends RancorBase {
  constructor (game) {
    super(game, "Rancor", "World Championship Decks 1999", "WC99");
  }
}

module.exports = Rancor;
