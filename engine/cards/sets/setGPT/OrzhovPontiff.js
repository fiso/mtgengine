"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrzhovPontiff extends UnimplementedCard {
  constructor(game) {
    super(game, "Orzhov Pontiff", "Guildpact", "GPT");
  }
}

module.exports = OrzhovPontiff;
