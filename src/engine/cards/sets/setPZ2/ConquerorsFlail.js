"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConquerorsFlail extends UnimplementedCard {
  constructor (game) {
    super(game, "Conqueror's Flail", "You Make the Cube", "PZ2");
  }
}

module.exports = ConquerorsFlail;
