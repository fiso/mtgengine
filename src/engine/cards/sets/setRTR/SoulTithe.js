"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulTithe extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Tithe", "Return to Ravnica", "RTR");
  }
}

module.exports = SoulTithe;
