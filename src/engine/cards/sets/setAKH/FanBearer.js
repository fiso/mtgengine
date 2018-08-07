"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FanBearer extends UnimplementedCard {
  constructor (game) {
    super(game, "Fan Bearer", "Amonkhet", "AKH");
  }
}

module.exports = FanBearer;
