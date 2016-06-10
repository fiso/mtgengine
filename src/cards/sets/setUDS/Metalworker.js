"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Metalworker extends UnimplementedCard {
  constructor (game) {
    super(game, "Metalworker", "Urza's Destiny", "UDS");
  }
}

module.exports = Metalworker;
