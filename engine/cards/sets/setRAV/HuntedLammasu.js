"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HuntedLammasu extends Card {
  constructor(game) {
    super(game, "Hunted Lammasu", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = HuntedLammasu;
