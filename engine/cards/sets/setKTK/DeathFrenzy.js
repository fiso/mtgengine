"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathFrenzy extends UnimplementedCard {
  constructor(game) {
    super(game, "Death Frenzy", "Khans of Tarkir", "KTK");
  }
}

module.exports = DeathFrenzy;
