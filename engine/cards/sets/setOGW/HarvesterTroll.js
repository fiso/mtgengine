"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HarvesterTroll extends Card {
  constructor(game) {
    super(game, "Harvester Troll", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = HarvesterTroll;
