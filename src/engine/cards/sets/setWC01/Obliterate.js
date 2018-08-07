"use strict";
const Constants = require ("../../../Constants");
const ObliterateBase = require("../setV16/Obliterate");

class Obliterate extends ObliterateBase {
  constructor (game) {
    super(game, "Obliterate", "World Championship Decks 2001", "WC01");
  }
}

module.exports = Obliterate;
