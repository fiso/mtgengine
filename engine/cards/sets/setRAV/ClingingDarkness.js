"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ClingingDarkness extends Card {
  constructor(game) {
    super(game, "Clinging Darkness", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ClingingDarkness;
