"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pandemonium extends UnimplementedCard {
  constructor (game) {
    super(game, "Pandemonium", "Exodus", "EXO");
  }
}

module.exports = Pandemonium;
