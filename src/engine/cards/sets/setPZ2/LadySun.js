"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LadySun extends UnimplementedCard {
  constructor (game) {
    super(game, "Lady Sun", "You Make the Cube", "PZ2");
  }
}

module.exports = LadySun;
