"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FleshbagMarauder extends UnimplementedCard {
  constructor (game) {
    super(game, "Fleshbag Marauder", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = FleshbagMarauder;
