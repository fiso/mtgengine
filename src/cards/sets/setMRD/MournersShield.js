"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MournersShield extends UnimplementedCard {
  constructor(game) {
    super(game, "Mourner's Shield", "Mirrodin", "MRD");
  }
}

module.exports = MournersShield;
