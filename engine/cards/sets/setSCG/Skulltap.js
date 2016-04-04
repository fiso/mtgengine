"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Skulltap extends Card {
  constructor(game) {
    super(game, "Skulltap", "Scourge", "SCG");
  }
}

module.exports = Skulltap;
