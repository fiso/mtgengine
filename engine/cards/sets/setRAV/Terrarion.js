"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Terrarion extends Card {
  constructor(game) {
    super(game, "Terrarion", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Terrarion;
