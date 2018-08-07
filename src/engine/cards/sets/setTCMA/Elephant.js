"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Elephant extends UnimplementedCard {
  constructor (game) {
    super(game, "Elephant", "Commander Anthology Tokens", "TCMA");
  }
}

module.exports = Elephant;
