"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodFunnel extends Card {
  constructor(game) {
    super(game, "Blood Funnel", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BloodFunnel;
