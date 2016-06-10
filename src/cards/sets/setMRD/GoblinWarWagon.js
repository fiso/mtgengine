"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinWarWagon extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin War Wagon", "Mirrodin", "MRD");
  }
}

module.exports = GoblinWarWagon;
