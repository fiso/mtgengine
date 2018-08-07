"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GamePlan extends UnimplementedCard {
  constructor (game) {
    super(game, "Game Plan", "Battlebond", "BBD");
  }
}

module.exports = GamePlan;
