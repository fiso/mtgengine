"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThelonsCurse extends UnimplementedCard {
  constructor(game) {
    super(game, "Thelon's Curse", "Fallen Empires", "FEM");
  }
}

module.exports = ThelonsCurse;
