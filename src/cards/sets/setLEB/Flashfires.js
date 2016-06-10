"use strict";
const Constants = require ("../../../Constants");
const FlashfiresBase = require("../set6ED/Flashfires");

class Flashfires extends FlashfiresBase {
  constructor (game) {
    super(game, "Flashfires", "Limited Edition Beta", "LEB");
  }
}

module.exports = Flashfires;
