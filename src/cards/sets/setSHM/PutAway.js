"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PutAway extends UnimplementedCard {
  constructor(game) {
    super(game, "Put Away", "Shadowmoor", "SHM");
  }
}

module.exports = PutAway;
