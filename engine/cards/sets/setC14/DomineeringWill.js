"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DomineeringWill extends Card {
  constructor(game) {
    super(game, "Domineering Will", "Commander 2014", "C14");
  }
}

module.exports = DomineeringWill;
