"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HollowbornBarghest extends UnimplementedCard {
  constructor (game) {
    super(game, "Hollowborn Barghest", "Shadowmoor", "SHM");
  }
}

module.exports = HollowbornBarghest;
