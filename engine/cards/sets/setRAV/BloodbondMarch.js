"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodbondMarch extends Card {
  constructor(game) {
    super(game, "Bloodbond March", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BloodbondMarch;
