"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeizetheSoul extends UnimplementedCard {
  constructor(game) {
    super(game, "Seize the Soul", "Guildpact", "GPT");
  }
}

module.exports = SeizetheSoul;
