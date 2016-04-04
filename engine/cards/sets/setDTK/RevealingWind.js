"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RevealingWind extends Card {
  constructor(game) {
    super(game, "Revealing Wind", "Dragons of Tarkir", "DTK");
  }
}

module.exports = RevealingWind;
