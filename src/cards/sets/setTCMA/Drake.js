"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Drake extends UnimplementedCard {
  constructor (game) {
    super(game, "Drake", "Commander Anthology Tokens", "TCMA");
  }
}

module.exports = Drake;
