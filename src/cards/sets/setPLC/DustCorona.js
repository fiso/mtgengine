"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DustCorona extends UnimplementedCard {
  constructor(game) {
    super(game, "Dust Corona", "Planar Chaos", "PLC");
  }
}

module.exports = DustCorona;
