"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmwithAether extends UnimplementedCard {
  constructor(game) {
    super(game, "Arm with Æther", "New Phyrexia", "NPH");
  }
}

module.exports = ArmwithAether;
