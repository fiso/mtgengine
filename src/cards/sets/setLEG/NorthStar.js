"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NorthStar extends UnimplementedCard {
  constructor (game) {
    super(game, "North Star", "Legends", "LEG");
  }
}

module.exports = NorthStar;
