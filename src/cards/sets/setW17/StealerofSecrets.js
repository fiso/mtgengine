"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StealerofSecrets extends UnimplementedCard {
  constructor (game) {
    super(game, "Stealer of Secrets", "Welcome Deck 2017", "W17");
  }
}

module.exports = StealerofSecrets;
