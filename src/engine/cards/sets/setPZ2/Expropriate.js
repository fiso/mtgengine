"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Expropriate extends UnimplementedCard {
  constructor (game) {
    super(game, "Expropriate", "You Make the Cube", "PZ2");
  }
}

module.exports = Expropriate;
