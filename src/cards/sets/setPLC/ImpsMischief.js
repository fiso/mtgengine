"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImpsMischief extends UnimplementedCard {
  constructor(game) {
    super(game, "Imp's Mischief", "Planar Chaos", "PLC");
  }
}

module.exports = ImpsMischief;
