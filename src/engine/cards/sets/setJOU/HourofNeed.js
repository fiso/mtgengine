"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HourofNeed extends UnimplementedCard {
  constructor (game) {
    super(game, "Hour of Need", "Journey into Nyx", "JOU");
  }
}

module.exports = HourofNeed;
