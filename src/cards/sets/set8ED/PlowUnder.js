"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlowUnder extends UnimplementedCard {
  constructor(game) {
    super(game, "Plow Under", "Eighth Edition", "8ED");
  }
}

module.exports = PlowUnder;
