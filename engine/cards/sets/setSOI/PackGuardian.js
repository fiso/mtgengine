"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PackGuardian extends UnimplementedCard {
  constructor(game) {
    super(game, "Pack Guardian", "Shadows over Innistrad", "SOI");
  }
}

module.exports = PackGuardian;
