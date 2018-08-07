"use strict";
const Constants = require ("../../../Constants");
const FrogmiteBase = require("../setMM2/Frogmite");

class Frogmite extends FrogmiteBase {
  constructor (game) {
    super(game, "Frogmite", "World Championship Decks 2004", "WC04");
  }
}

module.exports = Frogmite;
