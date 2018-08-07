"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NettlingImp extends UnimplementedCard {
  constructor (game) {
    super(game, "Nettling Imp", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = NettlingImp;
