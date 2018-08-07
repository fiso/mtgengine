"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IrresistiblePrey extends UnimplementedCard {
  constructor (game) {
    super(game, "Irresistible Prey", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = IrresistiblePrey;
