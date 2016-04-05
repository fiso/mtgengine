"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnslavedHorror extends UnimplementedCard {
  constructor(game) {
    super(game, "Enslaved Horror", "Mercadian Masques", "MMQ");
  }
}

module.exports = EnslavedHorror;
