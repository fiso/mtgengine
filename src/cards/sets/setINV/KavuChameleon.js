"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KavuChameleon extends UnimplementedCard {
  constructor(game) {
    super(game, "Kavu Chameleon", "Invasion", "INV");
  }
}

module.exports = KavuChameleon;
