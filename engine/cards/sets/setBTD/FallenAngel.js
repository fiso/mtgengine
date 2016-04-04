"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FallenAngel extends Card {
  constructor(game) {
    super(game, "Fallen Angel", "Beatdown Box Set", "BTD");
  }
}

module.exports = FallenAngel;
