"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Starke extends UnimplementedCard {
  constructor (game) {
    super(game, "Starke", "Vanguard", "VAN");
  }
}

module.exports = Starke;
