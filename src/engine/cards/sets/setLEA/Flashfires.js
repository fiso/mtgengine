"use strict";
const Constants = require ("../../../Constants");
const FlashfiresBase = require("../set9ED/Flashfires");

class Flashfires extends FlashfiresBase {
  constructor (game) {
    super(game, "Flashfires", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Flashfires;
