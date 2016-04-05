"use strict";
const Constants = require ("../../../Constants");
const FlashfiresBase = require("../set6ED/Flashfires");

class Flashfires extends FlashfiresBase {
  constructor(game) {
    super(game, "Flashfires", "Fourth Edition", "4ED");
  }
}

module.exports = Flashfires;
