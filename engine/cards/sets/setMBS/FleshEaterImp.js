"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FleshEaterImp extends UnimplementedCard {
  constructor(game) {
    super(game, "Flesh-Eater Imp", "Mirrodin Besieged", "MBS");
  }
}

module.exports = FleshEaterImp;
