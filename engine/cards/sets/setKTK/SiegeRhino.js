"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SiegeRhino extends UnimplementedCard {
  constructor(game) {
    super(game, "Siege Rhino", "Khans of Tarkir", "KTK");
  }
}

module.exports = SiegeRhino;
