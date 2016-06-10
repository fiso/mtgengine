"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DamnablePact extends UnimplementedCard {
  constructor (game) {
    super(game, "Damnable Pact", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DamnablePact;
