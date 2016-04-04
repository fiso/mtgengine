"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NorwoodRanger extends Card {
  constructor(game) {
    super(game, "Norwood Ranger", "Eighth Edition", "8ED");
  }
}

module.exports = NorwoodRanger;
