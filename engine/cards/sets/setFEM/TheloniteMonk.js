"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheloniteMonk extends UnimplementedCard {
  constructor(game) {
    super(game, "Thelonite Monk", "Fallen Empires", "FEM");
  }
}

module.exports = TheloniteMonk;
