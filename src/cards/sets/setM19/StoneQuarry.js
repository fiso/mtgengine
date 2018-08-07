"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneQuarry extends UnimplementedCard {
  constructor (game) {
    super(game, "Stone Quarry", "Core Set 2019", "M19");
  }
}

module.exports = StoneQuarry;
