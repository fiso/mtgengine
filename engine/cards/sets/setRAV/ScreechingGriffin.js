"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScreechingGriffin extends Card {
  constructor(game) {
    super(game, "Screeching Griffin", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ScreechingGriffin;
