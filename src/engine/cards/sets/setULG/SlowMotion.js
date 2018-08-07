"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlowMotion extends UnimplementedCard {
  constructor (game) {
    super(game, "Slow Motion", "Urza's Legacy", "ULG");
  }
}

module.exports = SlowMotion;
