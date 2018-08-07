"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraveScrabbler extends UnimplementedCard {
  constructor (game) {
    super(game, "Grave Scrabbler", "Future Sight", "FUT");
  }
}

module.exports = GraveScrabbler;
