"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlaughterPact extends UnimplementedCard {
  constructor (game) {
    super(game, "Slaughter Pact", "Future Sight", "FUT");
  }
}

module.exports = SlaughterPact;
