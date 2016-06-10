"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Liquify extends UnimplementedCard {
  constructor (game) {
    super(game, "Liquify", "Torment", "TOR");
  }
}

module.exports = Liquify;
