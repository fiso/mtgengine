"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DazzlingReflection extends UnimplementedCard {
  constructor(game) {
    super(game, "Dazzling Reflection", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = DazzlingReflection;
