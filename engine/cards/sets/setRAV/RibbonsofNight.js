"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RibbonsofNight extends Card {
  constructor(game) {
    super(game, "Ribbons of Night", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = RibbonsofNight;
