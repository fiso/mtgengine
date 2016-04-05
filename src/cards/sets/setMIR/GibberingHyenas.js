"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GibberingHyenas extends UnimplementedCard {
  constructor(game) {
    super(game, "Gibbering Hyenas", "Mirage", "MIR");
  }
}

module.exports = GibberingHyenas;
