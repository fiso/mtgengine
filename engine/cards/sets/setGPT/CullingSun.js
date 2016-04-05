"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CullingSun extends UnimplementedCard {
  constructor(game) {
    super(game, "Culling Sun", "Guildpact", "GPT");
  }
}

module.exports = CullingSun;
