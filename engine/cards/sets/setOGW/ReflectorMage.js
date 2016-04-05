"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReflectorMage extends UnimplementedCard {
  constructor(game) {
    super(game, "Reflector Mage", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ReflectorMage;
