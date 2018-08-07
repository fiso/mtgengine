"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RakingCanopy extends UnimplementedCard {
  constructor (game) {
    super(game, "Raking Canopy", "Shadowmoor", "SHM");
  }
}

module.exports = RakingCanopy;
