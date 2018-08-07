"use strict";
const Constants = require ("../../../Constants");
const IrresistiblePreyBase = require("../setCN2/IrresistiblePrey");

class IrresistiblePrey extends IrresistiblePreyBase {
  constructor (game) {
    super(game, "Irresistible Prey", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = IrresistiblePrey;
