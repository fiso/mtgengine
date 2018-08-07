"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhirlpoolRider extends UnimplementedCard {
  constructor (game) {
    super(game, "Whirlpool Rider", "Apocalypse", "APC");
  }
}

module.exports = WhirlpoolRider;
