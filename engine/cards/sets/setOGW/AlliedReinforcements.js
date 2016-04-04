"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlliedReinforcements extends Card {
  constructor(game) {
    super(game, "Allied Reinforcements", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = AlliedReinforcements;
