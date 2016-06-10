"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurstofSpeed extends UnimplementedCard {
  constructor (game) {
    super(game, "Burst of Speed", "Magic 2010", "M10");
  }
}

module.exports = BurstofSpeed;
