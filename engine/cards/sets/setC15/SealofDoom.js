"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SealofDoom extends Card {
  constructor(game) {
    super(game, "Seal of Doom", "Commander 2015", "C15");
  }
}

module.exports = SealofDoom;
