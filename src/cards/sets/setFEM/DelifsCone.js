"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DelifsCone extends UnimplementedCard {
  constructor (game) {
    super(game, "Delif's Cone", "Fallen Empires", "FEM");
  }
}

module.exports = DelifsCone;
