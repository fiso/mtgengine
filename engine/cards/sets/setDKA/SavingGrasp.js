"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SavingGrasp extends Card {
  constructor(game) {
    super(game, "Saving Grasp", "Dark Ascension", "DKA");
  }
}

module.exports = SavingGrasp;
