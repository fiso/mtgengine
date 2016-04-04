"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChooseYourChampion extends Card {
  constructor(game) {
    super(game, "Choose Your Champion", "Archenemy", "ARC");
  }
}

module.exports = ChooseYourChampion;
