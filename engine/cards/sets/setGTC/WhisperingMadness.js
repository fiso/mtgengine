"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhisperingMadness extends UnimplementedCard {
  constructor(game) {
    super(game, "Whispering Madness", "Gatecrash", "GTC");
  }
}

module.exports = WhisperingMadness;
