"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasteroftheWildHunt extends UnimplementedCard {
  constructor (game) {
    super(game, "Master of the Wild Hunt", "Magic 2010", "M10");
  }
}

module.exports = MasteroftheWildHunt;
