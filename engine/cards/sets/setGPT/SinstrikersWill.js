"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SinstrikersWill extends UnimplementedCard {
  constructor(game) {
    super(game, "Sinstriker's Will", "Guildpact", "GPT");
  }
}

module.exports = SinstrikersWill;
