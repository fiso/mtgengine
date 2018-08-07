"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasteroftheWildHunt extends UnimplementedCard {
  constructor (game) {
    super(game, "Master of the Wild Hunt", "Masters 25", "A25");
  }
}

module.exports = MasteroftheWildHunt;
