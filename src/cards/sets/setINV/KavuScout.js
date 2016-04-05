"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KavuScout extends UnimplementedCard {
  constructor(game) {
    super(game, "Kavu Scout", "Invasion", "INV");
  }
}

module.exports = KavuScout;
