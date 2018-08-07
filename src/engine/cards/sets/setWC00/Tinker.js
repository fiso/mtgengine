"use strict";
const Constants = require ("../../../Constants");
const TinkerBase = require("../setV09/Tinker");

class Tinker extends TinkerBase {
  constructor (game) {
    super(game, "Tinker", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Tinker;
