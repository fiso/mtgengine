"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DelifsCube extends UnimplementedCard {
  constructor(game) {
    super(game, "Delif's Cube", "Fallen Empires", "FEM");
  }
}

module.exports = DelifsCube;
