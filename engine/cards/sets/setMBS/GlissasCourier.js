"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlissasCourier extends UnimplementedCard {
  constructor(game) {
    super(game, "Glissa's Courier", "Mirrodin Besieged", "MBS");
  }
}

module.exports = GlissasCourier;
