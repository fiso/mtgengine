"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bust extends UnimplementedCard {
  constructor(game) {
    super(game, "Bust", "Planar Chaos", "PLC");
  }
}

module.exports = Bust;
