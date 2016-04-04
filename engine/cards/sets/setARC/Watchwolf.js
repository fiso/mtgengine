"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Watchwolf extends Card {
  constructor(game) {
    super(game, "Watchwolf", "Archenemy", "ARC");
  }
}

module.exports = Watchwolf;
