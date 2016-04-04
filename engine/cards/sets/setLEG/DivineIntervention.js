"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DivineIntervention extends Card {
  constructor(game) {
    super(game, "Divine Intervention", "Legends", "LEG");
  }
}

module.exports = DivineIntervention;
