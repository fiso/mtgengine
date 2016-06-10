"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConstantMists extends UnimplementedCard {
  constructor (game) {
    super(game, "Constant Mists", "Stronghold", "STH");
  }
}

module.exports = ConstantMists;
