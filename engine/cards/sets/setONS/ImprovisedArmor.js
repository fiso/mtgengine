"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ImprovisedArmor extends Card {
  constructor(game) {
    super(game, "Improvised Armor", "Onslaught", "ONS");
  }
}

module.exports = ImprovisedArmor;
