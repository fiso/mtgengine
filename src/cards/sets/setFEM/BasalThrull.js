"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BasalThrull extends UnimplementedCard {
  constructor (game) {
    super(game, "Basal Thrull", "Fallen Empires", "FEM");
  }
}

module.exports = BasalThrull;
