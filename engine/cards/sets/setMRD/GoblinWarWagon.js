"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinWarWagon extends Card {
  constructor(game) {
    super(game, "Goblin War Wagon", "Mirrodin", "MRD");
  }
}

module.exports = GoblinWarWagon;
