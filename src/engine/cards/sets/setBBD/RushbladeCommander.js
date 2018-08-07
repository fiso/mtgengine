"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RushbladeCommander extends UnimplementedCard {
  constructor (game) {
    super(game, "Rushblade Commander", "Battlebond", "BBD");
  }
}

module.exports = RushbladeCommander;
