"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BreathofFury extends UnimplementedCard {
  constructor(game) {
    super(game, "Breath of Fury", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BreathofFury;
