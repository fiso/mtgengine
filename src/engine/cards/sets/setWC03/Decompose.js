"use strict";
const Constants = require ("../../../Constants");
const DecomposeBase = require("../setDDK/Decompose");

class Decompose extends DecomposeBase {
  constructor (game) {
    super(game, "Decompose", "World Championship Decks 2003", "WC03");
  }
}

module.exports = Decompose;
