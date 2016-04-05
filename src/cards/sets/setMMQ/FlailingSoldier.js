"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlailingSoldier extends UnimplementedCard {
  constructor(game) {
    super(game, "Flailing Soldier", "Mercadian Masques", "MMQ");
  }
}

module.exports = FlailingSoldier;
