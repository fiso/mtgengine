"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeartWolf extends UnimplementedCard {
  constructor (game) {
    super(game, "Heart Wolf", "Homelands", "HML");
  }
}

module.exports = HeartWolf;
