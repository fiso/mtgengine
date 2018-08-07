"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeavenEarth extends UnimplementedCard {
  constructor (game) {
    super(game, "Heaven // Earth", "Amonkhet", "AKH");
  }
}

module.exports = HeavenEarth;
