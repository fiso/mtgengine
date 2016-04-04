"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TurntoDust extends UnimplementedCard {
  constructor(game) {
    super(game, "Turn to Dust", "Mirrodin", "MRD");
  }
}

module.exports = TurntoDust;
