"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvenLyre extends UnimplementedCard {
  constructor (game) {
    super(game, "Elven Lyre", "Fallen Empires", "FEM");
  }
}

module.exports = ElvenLyre;
