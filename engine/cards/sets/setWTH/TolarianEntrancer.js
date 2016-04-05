"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TolarianEntrancer extends UnimplementedCard {
  constructor(game) {
    super(game, "Tolarian Entrancer", "Weatherlight", "WTH");
  }
}

module.exports = TolarianEntrancer;
