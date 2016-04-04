"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UndercityShade extends Card {
  constructor(game) {
    super(game, "Undercity Shade", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = UndercityShade;
