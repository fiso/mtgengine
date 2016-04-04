"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DryadMilitant extends Card {
  constructor(game) {
    super(game, "Dryad Militant", "Magic Game Day", "pMGD");
  }
}

module.exports = DryadMilitant;
