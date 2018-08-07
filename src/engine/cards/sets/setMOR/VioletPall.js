"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VioletPall extends UnimplementedCard {
  constructor (game) {
    super(game, "Violet Pall", "Morningtide", "MOR");
  }
}

module.exports = VioletPall;
