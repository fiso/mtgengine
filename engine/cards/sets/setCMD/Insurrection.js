"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Insurrection extends Card {
  constructor(game) {
    super(game, "Insurrection", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Insurrection;
