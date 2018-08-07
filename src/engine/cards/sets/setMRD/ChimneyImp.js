"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChimneyImp extends UnimplementedCard {
  constructor (game) {
    super(game, "Chimney Imp", "Mirrodin", "MRD");
  }
}

module.exports = ChimneyImp;
