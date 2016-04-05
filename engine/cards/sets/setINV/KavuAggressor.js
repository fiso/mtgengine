"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KavuAggressor extends UnimplementedCard {
  constructor(game) {
    super(game, "Kavu Aggressor", "Invasion", "INV");
  }
}

module.exports = KavuAggressor;
