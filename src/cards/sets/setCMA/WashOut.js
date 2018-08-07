"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WashOut extends UnimplementedCard {
  constructor (game) {
    super(game, "Wash Out", "Commander Anthology", "CMA");
  }
}

module.exports = WashOut;
