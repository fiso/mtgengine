"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IrresistiblePrey extends UnimplementedCard {
  constructor (game) {
    super(game, "Irresistible Prey", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = IrresistiblePrey;
