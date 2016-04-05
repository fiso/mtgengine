"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LavaStorm extends UnimplementedCard {
  constructor(game) {
    super(game, "Lava Storm", "Weatherlight", "WTH");
  }
}

module.exports = LavaStorm;
