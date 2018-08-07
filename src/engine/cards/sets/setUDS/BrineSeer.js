"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrineSeer extends UnimplementedCard {
  constructor (game) {
    super(game, "Brine Seer", "Urza's Destiny", "UDS");
  }
}

module.exports = BrineSeer;
