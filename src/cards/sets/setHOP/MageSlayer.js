"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MageSlayer extends UnimplementedCard {
  constructor (game) {
    super(game, "Mage Slayer", "Planechase", "HOP");
  }
}

module.exports = MageSlayer;
