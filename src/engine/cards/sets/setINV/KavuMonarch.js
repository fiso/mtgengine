"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KavuMonarch extends UnimplementedCard {
  constructor (game) {
    super(game, "Kavu Monarch", "Invasion", "INV");
  }
}

module.exports = KavuMonarch;
