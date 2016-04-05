"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeralInstinct extends UnimplementedCard {
  constructor(game) {
    super(game, "Feral Instinct", "Visions", "VIS");
  }
}

module.exports = FeralInstinct;
