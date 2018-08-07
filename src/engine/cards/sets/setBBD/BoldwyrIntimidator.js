"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoldwyrIntimidator extends UnimplementedCard {
  constructor (game) {
    super(game, "Boldwyr Intimidator", "Battlebond", "BBD");
  }
}

module.exports = BoldwyrIntimidator;
