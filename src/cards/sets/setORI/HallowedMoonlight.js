"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HallowedMoonlight extends UnimplementedCard {
  constructor(game) {
    super(game, "Hallowed Moonlight", "Magic Origins", "ORI");
  }
}

module.exports = HallowedMoonlight;
