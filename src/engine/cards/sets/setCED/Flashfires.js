"use strict";
const Constants = require ("../../../Constants");
const FlashfiresBase = require("../set9ED/Flashfires");

class Flashfires extends FlashfiresBase {
  constructor (game) {
    super(game, "Flashfires", "Collectors’ Edition", "CED");
  }
}

module.exports = Flashfires;
