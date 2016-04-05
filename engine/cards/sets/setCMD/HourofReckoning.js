"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HourofReckoning extends UnimplementedCard {
  constructor(game) {
    super(game, "Hour of Reckoning", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = HourofReckoning;
