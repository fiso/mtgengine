"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Replenish extends UnimplementedCard {
  constructor (game) {
    super(game, "Replenish", "Urza's Destiny", "UDS");
  }
}

module.exports = Replenish;
