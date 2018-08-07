"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Carnivore extends UnimplementedCard {
  constructor (game) {
    super(game, "Carnivore", "Eternal Masters Tokens", "TEMA");
  }
}

module.exports = Carnivore;
