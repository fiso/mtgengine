"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MassofGhouls extends UnimplementedCard {
  constructor(game) {
    super(game, "Mass of Ghouls", "Future Sight", "FUT");
  }
}

module.exports = MassofGhouls;
