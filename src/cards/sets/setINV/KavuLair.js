"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KavuLair extends UnimplementedCard {
  constructor(game) {
    super(game, "Kavu Lair", "Invasion", "INV");
  }
}

module.exports = KavuLair;
