"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WieldingtheGreenDragon extends UnimplementedCard {
  constructor(game) {
    super(game, "Wielding the Green Dragon", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WieldingtheGreenDragon;
