"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DauntlessEscort extends UnimplementedCard {
  constructor (game) {
    super(game, "Dauntless Escort", "Alara Reborn", "ARB");
  }
}

module.exports = DauntlessEscort;
