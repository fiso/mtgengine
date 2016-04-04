"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Seizures extends Card {
  constructor(game) {
    super(game, "Seizures", "Ice Age", "ICE");
  }
}

module.exports = Seizures;
