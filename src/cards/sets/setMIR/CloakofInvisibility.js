"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CloakofInvisibility extends UnimplementedCard {
  constructor(game) {
    super(game, "Cloak of Invisibility", "Mirage", "MIR");
  }
}

module.exports = CloakofInvisibility;
