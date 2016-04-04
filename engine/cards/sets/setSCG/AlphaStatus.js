"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlphaStatus extends UnimplementedCard {
  constructor(game) {
    super(game, "Alpha Status", "Scourge", "SCG");
  }
}

module.exports = AlphaStatus;
