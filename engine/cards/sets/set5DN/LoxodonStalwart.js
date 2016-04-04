"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LoxodonStalwart extends Card {
  constructor(game) {
    super(game, "Loxodon Stalwart", "Fifth Dawn", "5DN");
  }
}

module.exports = LoxodonStalwart;
