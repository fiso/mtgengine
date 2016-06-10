"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoggedHunter extends UnimplementedCard {
  constructor (game) {
    super(game, "Dogged Hunter", "Odyssey", "ODY");
  }
}

module.exports = DoggedHunter;
