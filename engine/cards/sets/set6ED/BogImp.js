"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogImp extends UnimplementedCard {
  constructor(game) {
    super(game, "Bog Imp", "Classic Sixth Edition", "6ED");
  }
}

module.exports = BogImp;
