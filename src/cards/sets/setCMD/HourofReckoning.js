"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HourofReckoning extends UnimplementedCard {
  constructor (game) {
    super(game, "Hour of Reckoning", "Commander 2011", "CMD");
  }
}

module.exports = HourofReckoning;
