"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DauntlessEscort extends UnimplementedCard {
  constructor (game) {
    super(game, "Dauntless Escort", "Commander 2016", "C16");
  }
}

module.exports = DauntlessEscort;
