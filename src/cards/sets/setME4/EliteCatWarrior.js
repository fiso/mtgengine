"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EliteCatWarrior extends UnimplementedCard {
  constructor(game) {
    super(game, "Elite Cat Warrior", "Masters Edition IV", "ME4");
  }
}

module.exports = EliteCatWarrior;
