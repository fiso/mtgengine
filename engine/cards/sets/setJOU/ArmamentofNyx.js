"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmamentofNyx extends UnimplementedCard {
  constructor(game) {
    super(game, "Armament of Nyx", "Journey into Nyx", "JOU");
  }
}

module.exports = ArmamentofNyx;
