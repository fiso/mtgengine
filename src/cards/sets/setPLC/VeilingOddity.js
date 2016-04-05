"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeilingOddity extends UnimplementedCard {
  constructor(game) {
    super(game, "Veiling Oddity", "Planar Chaos", "PLC");
  }
}

module.exports = VeilingOddity;
