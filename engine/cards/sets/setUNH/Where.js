"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Where extends UnimplementedCard {
  constructor(game) {
    super(game, "Where", "Unhinged", "UNH");
  }
}

module.exports = Where;
