"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Retether extends UnimplementedCard {
  constructor(game) {
    super(game, "Retether", "Planar Chaos", "PLC");
  }
}

module.exports = Retether;
