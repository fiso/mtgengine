"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViashinoBey extends UnimplementedCard {
  constructor(game) {
    super(game, "Viashino Bey", "Urza's Legacy", "ULG");
  }
}

module.exports = ViashinoBey;
