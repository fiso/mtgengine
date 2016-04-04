"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlagFiend extends UnimplementedCard {
  constructor(game) {
    super(game, "Slag Fiend", "New Phyrexia", "NPH");
  }
}

module.exports = SlagFiend;
