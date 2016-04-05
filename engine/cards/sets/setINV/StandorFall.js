"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StandorFall extends UnimplementedCard {
  constructor(game) {
    super(game, "Stand or Fall", "Invasion", "INV");
  }
}

module.exports = StandorFall;
