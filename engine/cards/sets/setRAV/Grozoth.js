"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Grozoth extends Card {
  constructor(game) {
    super(game, "Grozoth", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Grozoth;
