"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LowlandBasilisk extends UnimplementedCard {
  constructor(game) {
    super(game, "Lowland Basilisk", "Stronghold", "STH");
  }
}

module.exports = LowlandBasilisk;
