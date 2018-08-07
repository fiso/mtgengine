"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DamnablePact extends UnimplementedCard {
  constructor (game) {
    super(game, "Damnable Pact", "Commander 2017", "C17");
  }
}

module.exports = DamnablePact;
