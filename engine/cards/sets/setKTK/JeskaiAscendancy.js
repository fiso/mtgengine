"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JeskaiAscendancy extends UnimplementedCard {
  constructor(game) {
    super(game, "Jeskai Ascendancy", "Khans of Tarkir", "KTK");
  }
}

module.exports = JeskaiAscendancy;
