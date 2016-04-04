"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ColossalMight extends UnimplementedCard {
  constructor(game) {
    super(game, "Colossal Might", "Alara Reborn", "ARB");
  }
}

module.exports = ColossalMight;
