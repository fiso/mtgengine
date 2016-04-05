"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeoninDenGuard extends UnimplementedCard {
  constructor(game) {
    super(game, "Leonin Den-Guard", "Mirrodin", "MRD");
  }
}

module.exports = LeoninDenGuard;
