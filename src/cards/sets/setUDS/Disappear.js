"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Disappear extends UnimplementedCard {
  constructor (game) {
    super(game, "Disappear", "Urza's Destiny", "UDS");
  }
}

module.exports = Disappear;
