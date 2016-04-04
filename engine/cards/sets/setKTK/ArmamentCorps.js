"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmamentCorps extends UnimplementedCard {
  constructor(game) {
    super(game, "Armament Corps", "Khans of Tarkir", "KTK");
  }
}

module.exports = ArmamentCorps;
