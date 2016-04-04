"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DauntlessEscortAvatar extends Card {
  constructor(game) {
    super(game, "Dauntless Escort Avatar", "Vanguard", "VAN");
  }
}

module.exports = DauntlessEscortAvatar;
