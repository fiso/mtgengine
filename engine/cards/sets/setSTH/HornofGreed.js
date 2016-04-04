"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HornofGreed extends UnimplementedCard {
  constructor(game) {
    super(game, "Horn of Greed", "Stronghold", "STH");
  }
}

module.exports = HornofGreed;
