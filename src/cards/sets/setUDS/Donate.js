"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Donate extends UnimplementedCard {
  constructor (game) {
    super(game, "Donate", "Urza's Destiny", "UDS");
  }
}

module.exports = Donate;
