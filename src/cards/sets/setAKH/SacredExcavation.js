"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SacredExcavation extends UnimplementedCard {
  constructor (game) {
    super(game, "Sacred Excavation", "Amonkhet", "AKH");
  }
}

module.exports = SacredExcavation;
