"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TolarianWinds extends UnimplementedCard {
  constructor(game) {
    super(game, "Tolarian Winds", "Beatdown Box Set", "BTD");
  }
}

module.exports = TolarianWinds;
