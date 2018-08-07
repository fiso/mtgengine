"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MartyrofSpores extends UnimplementedCard {
  constructor (game) {
    super(game, "Martyr of Spores", "Coldsnap", "CSP");
  }
}

module.exports = MartyrofSpores;
