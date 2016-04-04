"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LetheLake extends UnimplementedCard {
  constructor(game) {
    super(game, "Lethe Lake", "Planechase", "HOP");
  }
}

module.exports = LetheLake;
