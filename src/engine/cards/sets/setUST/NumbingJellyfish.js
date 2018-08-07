"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NumbingJellyfish extends UnimplementedCard {
  constructor (game) {
    super(game, "Numbing Jellyfish", "Unstable", "UST");
  }
}

module.exports = NumbingJellyfish;
