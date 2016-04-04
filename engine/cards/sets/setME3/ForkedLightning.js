"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForkedLightning extends UnimplementedCard {
  constructor(game) {
    super(game, "Forked Lightning", "Masters Edition III", "ME3");
  }
}

module.exports = ForkedLightning;
