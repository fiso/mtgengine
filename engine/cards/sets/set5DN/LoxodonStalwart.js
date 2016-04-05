"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoxodonStalwart extends UnimplementedCard {
  constructor(game) {
    super(game, "Loxodon Stalwart", "Fifth Dawn", "5DN");
  }
}

module.exports = LoxodonStalwart;
