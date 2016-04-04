"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Perplex extends Card {
  constructor(game) {
    super(game, "Perplex", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Perplex;
