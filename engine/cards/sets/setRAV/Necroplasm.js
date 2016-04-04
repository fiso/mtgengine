"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Necroplasm extends Card {
  constructor(game) {
    super(game, "Necroplasm", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Necroplasm;
