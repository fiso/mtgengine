"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThoughtHarvester extends UnimplementedCard {
  constructor(game) {
    super(game, "Thought Harvester", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ThoughtHarvester;
