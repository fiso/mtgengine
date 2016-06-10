"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeWarp extends UnimplementedCard {
  constructor (game) {
    super(game, "Time Warp", "Judge Gift Program", "pJGP");
  }
}

module.exports = TimeWarp;
