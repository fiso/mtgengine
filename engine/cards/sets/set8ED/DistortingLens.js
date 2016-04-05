"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DistortingLens extends UnimplementedCard {
  constructor(game) {
    super(game, "Distorting Lens", "Eighth Edition", "8ED");
  }
}

module.exports = DistortingLens;
