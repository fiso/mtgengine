"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RustrazorButcher extends UnimplementedCard {
  constructor(game) {
    super(game, "Rustrazor Butcher", "Shadowmoor", "SHM");
  }
}

module.exports = RustrazorButcher;
