"use strict";
const Constants = require ("../../../Constants");
const CharmbreakerDevilsBase = require("../setIMA/CharmbreakerDevils");

class CharmbreakerDevils extends CharmbreakerDevilsBase {
  constructor (game) {
    super(game, "Charmbreaker Devils", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = CharmbreakerDevils;
