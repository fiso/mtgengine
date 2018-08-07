"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HungryHungryHeifer extends UnimplementedCard {
  constructor (game) {
    super(game, "Hungry Hungry Heifer", "Unglued", "UGL");
  }
}

module.exports = HungryHungryHeifer;
