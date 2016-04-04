"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CorpseChurn extends Card {
  constructor(game) {
    super(game, "Corpse Churn", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = CorpseChurn;
