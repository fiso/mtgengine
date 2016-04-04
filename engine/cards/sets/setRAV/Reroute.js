"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Reroute extends Card {
  constructor(game) {
    super(game, "Reroute", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Reroute;
