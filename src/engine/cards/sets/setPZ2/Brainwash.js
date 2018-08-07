"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Brainwash extends UnimplementedCard {
  constructor (game) {
    super(game, "Brainwash", "You Make the Cube", "PZ2");
  }
}

module.exports = Brainwash;
