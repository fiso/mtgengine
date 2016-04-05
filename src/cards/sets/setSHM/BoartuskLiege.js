"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoartuskLiege extends UnimplementedCard {
  constructor(game) {
    super(game, "Boartusk Liege", "Shadowmoor", "SHM");
  }
}

module.exports = BoartuskLiege;
