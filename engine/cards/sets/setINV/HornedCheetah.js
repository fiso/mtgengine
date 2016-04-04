"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HornedCheetah extends UnimplementedCard {
  constructor(game) {
    super(game, "Horned Cheetah", "Invasion", "INV");
  }
}

module.exports = HornedCheetah;
