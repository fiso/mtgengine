"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TheloniteHermit extends Card {
  constructor(game) {
    super(game, "Thelonite Hermit", "Archenemy", "ARC");
  }
}

module.exports = TheloniteHermit;
