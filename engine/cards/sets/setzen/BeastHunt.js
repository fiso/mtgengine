"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BeastHuntBase = require("../setHOP/BeastHunt.js");

class BeastHunt extends BeastHuntBase {
  constructor(game) {
    super(game, "Beast Hunt", "Zendikar", "ZEN");
  }
}

module.exports = BeastHunt;
