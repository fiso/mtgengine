"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Brainiac extends UnimplementedCard {
  constructor (game) {
    super(game, "Brainiac", "Unstable Tokens", "TUST");
  }
}

module.exports = Brainiac;
