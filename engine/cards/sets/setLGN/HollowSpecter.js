"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HollowSpecter extends UnimplementedCard {
  constructor(game) {
    super(game, "Hollow Specter", "Legions", "LGN");
  }
}

module.exports = HollowSpecter;
