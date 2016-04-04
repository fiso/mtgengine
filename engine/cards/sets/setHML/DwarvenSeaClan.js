"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwarvenSeaClan extends Card {
  constructor(game) {
    super(game, "Dwarven Sea Clan", "Homelands", "HML");
  }
}

module.exports = DwarvenSeaClan;
