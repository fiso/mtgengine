"use strict";
const Constants = require ("../../../Constants");
const SerumVisionsBase = require("../setMM3/SerumVisions");

class SerumVisions extends SerumVisionsBase {
  constructor (game) {
    super(game, "Serum Visions", "World Championship Decks 2004", "WC04");
  }
}

module.exports = SerumVisions;
