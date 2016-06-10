"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbzanAscendancy extends UnimplementedCard {
  constructor (game) {
    super(game, "Abzan Ascendancy", "Khans of Tarkir", "KTK");
  }
}

module.exports = AbzanAscendancy;
