"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Metallurgeon extends Card {
  constructor(game) {
    super(game, "Metallurgeon", "Archenemy", "ARC");
  }
}

module.exports = Metallurgeon;
