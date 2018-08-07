"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterWarcraft extends UnimplementedCard {
  constructor (game) {
    super(game, "Master Warcraft", "Commander Anthology", "CMA");
  }
}

module.exports = MasterWarcraft;
