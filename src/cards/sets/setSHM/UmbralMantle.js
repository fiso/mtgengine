"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UmbralMantle extends UnimplementedCard {
  constructor (game) {
    super(game, "Umbral Mantle", "Shadowmoor", "SHM");
  }
}

module.exports = UmbralMantle;
