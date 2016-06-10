"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvenFortress extends UnimplementedCard {
  constructor (game) {
    super(game, "Elven Fortress", "Fallen Empires", "FEM");
  }
}

module.exports = ElvenFortress;
