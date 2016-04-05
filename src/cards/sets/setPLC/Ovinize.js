"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ovinize extends UnimplementedCard {
  constructor(game) {
    super(game, "Ovinize", "Planar Chaos", "PLC");
  }
}

module.exports = Ovinize;
