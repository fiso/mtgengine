"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrissSamiteGuardian extends UnimplementedCard {
  constructor(game) {
    super(game, "Oriss, Samite Guardian", "Future Sight", "FUT");
  }
}

module.exports = OrissSamiteGuardian;
