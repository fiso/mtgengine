"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DestructiveForce extends UnimplementedCard {
  constructor(game) {
    super(game, "Destructive Force", "Magic 2011", "M11");
  }
}

module.exports = DestructiveForce;
