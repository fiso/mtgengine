"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SimicInitiate extends Card {
  constructor(game) {
    super(game, "Simic Initiate", "Dissension", "DIS");
  }
}

module.exports = SimicInitiate;
