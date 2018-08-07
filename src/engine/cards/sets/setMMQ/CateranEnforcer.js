"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CateranEnforcer extends UnimplementedCard {
  constructor (game) {
    super(game, "Cateran Enforcer", "Mercadian Masques", "MMQ");
  }
}

module.exports = CateranEnforcer;
