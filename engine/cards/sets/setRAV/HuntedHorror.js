"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HuntedHorror extends Card {
  constructor(game) {
    super(game, "Hunted Horror", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = HuntedHorror;
