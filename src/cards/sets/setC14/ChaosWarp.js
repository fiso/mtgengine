"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChaosWarp extends UnimplementedCard {
  constructor (game) {
    super(game, "Chaos Warp", "Commander 2014", "C14");
  }
}

module.exports = ChaosWarp;
