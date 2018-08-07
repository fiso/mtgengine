"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImmaculateMagistrate extends UnimplementedCard {
  constructor (game) {
    super(game, "Immaculate Magistrate", "Commander Anthology", "CMA");
  }
}

module.exports = ImmaculateMagistrate;
