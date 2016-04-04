"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoreVassal extends UnimplementedCard {
  constructor(game) {
    super(game, "Gore Vassal", "Mirrodin Besieged", "MBS");
  }
}

module.exports = GoreVassal;
