"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SearingWind extends UnimplementedCard {
  constructor(game) {
    super(game, "Searing Wind", "Eighth Edition", "8ED");
  }
}

module.exports = SearingWind;
