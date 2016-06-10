"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurnTrail extends UnimplementedCard {
  constructor (game) {
    super(game, "Burn Trail", "Shadowmoor", "SHM");
  }
}

module.exports = BurnTrail;
