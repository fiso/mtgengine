"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProtectiveSphere extends UnimplementedCard {
  constructor(game) {
    super(game, "Protective Sphere", "Invasion", "INV");
  }
}

module.exports = ProtectiveSphere;
