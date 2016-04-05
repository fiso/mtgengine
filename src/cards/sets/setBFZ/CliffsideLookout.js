"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CliffsideLookout extends UnimplementedCard {
  constructor(game) {
    super(game, "Cliffside Lookout", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CliffsideLookout;
