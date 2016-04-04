"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LastGasp extends Card {
  constructor(game) {
    super(game, "Last Gasp", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = LastGasp;
