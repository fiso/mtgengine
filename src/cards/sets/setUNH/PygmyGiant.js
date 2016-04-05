"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PygmyGiant extends UnimplementedCard {
  constructor(game) {
    super(game, "Pygmy Giant", "Unhinged", "UNH");
  }
}

module.exports = PygmyGiant;
