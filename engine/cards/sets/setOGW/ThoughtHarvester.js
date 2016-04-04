"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThoughtHarvester extends Card {
  constructor(game) {
    super(game, "Thought Harvester", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ThoughtHarvester;
