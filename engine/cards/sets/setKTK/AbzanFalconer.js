"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbzanFalconer extends UnimplementedCard {
  constructor(game) {
    super(game, "Abzan Falconer", "Khans of Tarkir", "KTK");
  }
}

module.exports = AbzanFalconer;
