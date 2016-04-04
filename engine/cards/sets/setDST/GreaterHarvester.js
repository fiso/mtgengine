"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreaterHarvester extends Card {
  constructor(game) {
    super(game, "Greater Harvester", "Darksteel", "DST");
  }
}

module.exports = GreaterHarvester;
