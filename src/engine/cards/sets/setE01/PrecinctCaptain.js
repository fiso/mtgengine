"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrecinctCaptain extends UnimplementedCard {
  constructor (game) {
    super(game, "Precinct Captain", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = PrecinctCaptain;
