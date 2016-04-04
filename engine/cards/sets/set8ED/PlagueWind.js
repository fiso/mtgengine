"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlagueWind extends Card {
  constructor(game) {
    super(game, "Plague Wind", "Eighth Edition", "8ED");
  }
}

module.exports = PlagueWind;
