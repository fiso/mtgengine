"use strict";
const Constants = require ("../../../Constants");
const OptBase = require("../setDOM/Opt");

class Opt extends OptBase {
  constructor (game) {
    super(game, "Opt", "World Championship Decks 2001", "WC01");
  }
}

module.exports = Opt;
