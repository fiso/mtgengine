"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScentofJasmine extends UnimplementedCard {
  constructor(game) {
    super(game, "Scent of Jasmine", "Urza's Destiny", "UDS");
  }
}

module.exports = ScentofJasmine;
