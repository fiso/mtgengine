"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FracturedLoyalty extends UnimplementedCard {
  constructor(game) {
    super(game, "Fractured Loyalty", "Mirrodin", "MRD");
  }
}

module.exports = FracturedLoyalty;
