"use strict";
const Constants = require ("../../../Constants");
const SpiritmongerBase = require("../setIMA/Spiritmonger");

class Spiritmonger extends SpiritmongerBase {
  constructor (game) {
    super(game, "Spiritmonger", "World Championship Decks 2001", "WC01");
  }
}

module.exports = Spiritmonger;
