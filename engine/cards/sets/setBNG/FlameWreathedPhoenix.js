"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FlameWreathedPhoenix extends Card {
  constructor(game) {
    super(game, "Flame-Wreathed Phoenix", "Born of the Gods", "BNG");
  }
}

module.exports = FlameWreathedPhoenix;
