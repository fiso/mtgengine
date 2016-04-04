"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormHerd extends UnimplementedCard {
  constructor(game) {
    super(game, "Storm Herd", "Guildpact", "GPT");
  }
}

module.exports = StormHerd;
