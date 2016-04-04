"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlashfiresBase = require("../set6ED/Flashfires.js");

class Flashfires extends FlashfiresBase {
  constructor(game) {
    super(game, "Flashfires", "Portal", "POR");
  }
}

module.exports = Flashfires;
