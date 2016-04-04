"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TowerofChampions extends Card {
  constructor(game) {
    super(game, "Tower of Champions", "Mirrodin", "MRD");
  }
}

module.exports = TowerofChampions;
