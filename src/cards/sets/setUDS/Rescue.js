"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rescue extends UnimplementedCard {
  constructor (game) {
    super(game, "Rescue", "Urza's Destiny", "UDS");
  }
}

module.exports = Rescue;
