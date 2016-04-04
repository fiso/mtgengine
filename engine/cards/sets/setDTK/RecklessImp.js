"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecklessImp extends UnimplementedCard {
  constructor(game) {
    super(game, "Reckless Imp", "Dragons of Tarkir", "DTK");
  }
}

module.exports = RecklessImp;
