"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Encroach extends UnimplementedCard {
  constructor (game) {
    super(game, "Encroach", "Urza's Destiny", "UDS");
  }
}

module.exports = Encroach;
