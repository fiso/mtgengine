"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WingStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Wing Storm", "Prophecy", "PCY");
  }
}

module.exports = WingStorm;
