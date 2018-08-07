"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeavensGate extends UnimplementedCard {
  constructor (game) {
    super(game, "Heaven's Gate", "Legends", "LEG");
  }
}

module.exports = HeavensGate;
