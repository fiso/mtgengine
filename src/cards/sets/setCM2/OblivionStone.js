"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OblivionStone extends UnimplementedCard {
  constructor (game) {
    super(game, "Oblivion Stone", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = OblivionStone;
