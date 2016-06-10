"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TowerofChampions extends UnimplementedCard {
  constructor (game) {
    super(game, "Tower of Champions", "Mirrodin", "MRD");
  }
}

module.exports = TowerofChampions;
