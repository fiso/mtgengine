"use strict";
const Constants = require ("../../../Constants");
const FlashfiresBase = require("../set6ED/Flashfires");

class Flashfires extends FlashfiresBase {
  constructor(game) {
    super(game, "Flashfires", "Fifth Edition", "5ED");
  }
}

module.exports = Flashfires;
