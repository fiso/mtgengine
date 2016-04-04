"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoltaicConstruct extends UnimplementedCard {
  constructor(game) {
    super(game, "Voltaic Construct", "Darksteel", "DST");
  }
}

module.exports = VoltaicConstruct;
