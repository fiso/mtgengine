"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WreakHavoc extends UnimplementedCard {
  constructor(game) {
    super(game, "Wreak Havoc", "Guildpact", "GPT");
  }
}

module.exports = WreakHavoc;
