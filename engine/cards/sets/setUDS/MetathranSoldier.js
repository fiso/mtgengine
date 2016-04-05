"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MetathranSoldier extends UnimplementedCard {
  constructor(game) {
    super(game, "Metathran Soldier", "Urza's Destiny", "UDS");
  }
}

module.exports = MetathranSoldier;
