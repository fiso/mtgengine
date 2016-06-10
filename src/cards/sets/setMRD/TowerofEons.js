"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TowerofEons extends UnimplementedCard {
  constructor (game) {
    super(game, "Tower of Eons", "Mirrodin", "MRD");
  }
}

module.exports = TowerofEons;
