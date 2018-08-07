"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ParadiseMantle extends UnimplementedCard {
  constructor (game) {
    super(game, "Paradise Mantle", "Modern Masters", "MMA");
  }
}

module.exports = ParadiseMantle;
