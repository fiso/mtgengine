"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeartWarden extends UnimplementedCard {
  constructor (game) {
    super(game, "Heart Warden", "Urza's Destiny", "UDS");
  }
}

module.exports = HeartWarden;
