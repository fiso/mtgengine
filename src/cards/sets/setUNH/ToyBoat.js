"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ToyBoat extends UnimplementedCard {
  constructor (game) {
    super(game, "Toy Boat", "Unhinged", "UNH");
  }
}

module.exports = ToyBoat;
