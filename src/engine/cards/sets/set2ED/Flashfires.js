"use strict";
const Constants = require ("../../../Constants");
const FlashfiresBase = require("../set9ED/Flashfires");

class Flashfires extends FlashfiresBase {
  constructor (game) {
    super(game, "Flashfires", "Unlimited Edition", "2ED");
  }
}

module.exports = Flashfires;
