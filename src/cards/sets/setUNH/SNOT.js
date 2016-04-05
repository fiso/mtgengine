"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SNOT extends UnimplementedCard {
  constructor(game) {
    super(game, "S.N.O.T.", "Unhinged", "UNH");
  }
}

module.exports = SNOT;
