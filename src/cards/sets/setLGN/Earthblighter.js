"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Earthblighter extends UnimplementedCard {
  constructor(game) {
    super(game, "Earthblighter", "Legions", "LGN");
  }
}

module.exports = Earthblighter;
