"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlunderedStatue extends UnimplementedCard {
  constructor (game) {
    super(game, "Plundered Statue", "Battle the Horde", "TBTH");
  }
}

module.exports = PlunderedStatue;
