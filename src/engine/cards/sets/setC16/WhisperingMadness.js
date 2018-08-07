"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhisperingMadness extends UnimplementedCard {
  constructor (game) {
    super(game, "Whispering Madness", "Commander 2016", "C16");
  }
}

module.exports = WhisperingMadness;
