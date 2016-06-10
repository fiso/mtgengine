"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OldFogey extends UnimplementedCard {
  constructor (game) {
    super(game, "Old Fogey", "Unhinged", "UNH");
  }
}

module.exports = OldFogey;
