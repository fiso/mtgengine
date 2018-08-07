"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rootwalla extends UnimplementedCard {
  constructor (game) {
    super(game, "Rootwalla", "Welcome Deck 2017", "W17");
  }
}

module.exports = Rootwalla;
