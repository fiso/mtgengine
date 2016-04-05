"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KavuTitan extends UnimplementedCard {
  constructor(game) {
    super(game, "Kavu Titan", "Invasion", "INV");
  }
}

module.exports = KavuTitan;
