"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AshenmoorLiege extends UnimplementedCard {
  constructor(game) {
    super(game, "Ashenmoor Liege", "Shadowmoor", "SHM");
  }
}

module.exports = AshenmoorLiege;
