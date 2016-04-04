"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrescientChimera extends UnimplementedCard {
  constructor(game) {
    super(game, "Prescient Chimera", "Theros", "THS");
  }
}

module.exports = PrescientChimera;
