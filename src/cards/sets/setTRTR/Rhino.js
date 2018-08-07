"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rhino extends UnimplementedCard {
  constructor (game) {
    super(game, "Rhino", "Return to Ravnica Tokens", "TRTR");
  }
}

module.exports = Rhino;
