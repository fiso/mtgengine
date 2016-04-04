"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HarvesterDruid extends Card {
  constructor(game) {
    super(game, "Harvester Druid", "Judgment", "JUD");
  }
}

module.exports = HarvesterDruid;
