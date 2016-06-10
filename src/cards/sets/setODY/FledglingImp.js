"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FledglingImp extends UnimplementedCard {
  constructor (game) {
    super(game, "Fledgling Imp", "Odyssey", "ODY");
  }
}

module.exports = FledglingImp;
