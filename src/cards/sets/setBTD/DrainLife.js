"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrainLife extends UnimplementedCard {
  constructor(game) {
    super(game, "Drain Life", "Beatdown Box Set", "BTD");
  }
}

module.exports = DrainLife;
