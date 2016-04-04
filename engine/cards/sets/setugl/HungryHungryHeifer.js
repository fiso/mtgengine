"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HungryHungryHeifer extends Card {
  constructor(game) {
    super(game, "Hungry Hungry Heifer", "Unglued", "UGL");
  }
}

module.exports = HungryHungryHeifer;
