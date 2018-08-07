"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FogBank extends UnimplementedCard {
  constructor (game) {
    super(game, "Fog Bank", "Battlebond", "BBD");
  }
}

module.exports = FogBank;
