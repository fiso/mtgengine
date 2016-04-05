"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MatterReshaper extends UnimplementedCard {
  constructor(game) {
    super(game, "Matter Reshaper", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = MatterReshaper;
