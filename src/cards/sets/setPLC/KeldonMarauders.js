"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeldonMarauders extends UnimplementedCard {
  constructor(game) {
    super(game, "Keldon Marauders", "Planar Chaos", "PLC");
  }
}

module.exports = KeldonMarauders;
