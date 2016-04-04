"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WhirlpoolRider extends Card {
  constructor(game) {
    super(game, "Whirlpool Rider", "Apocalypse", "APC");
  }
}

module.exports = WhirlpoolRider;
