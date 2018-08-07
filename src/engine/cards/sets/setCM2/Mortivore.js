"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mortivore extends UnimplementedCard {
  constructor (game) {
    super(game, "Mortivore", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = Mortivore;
