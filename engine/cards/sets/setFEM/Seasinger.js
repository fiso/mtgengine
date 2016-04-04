"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Seasinger extends UnimplementedCard {
  constructor(game) {
    super(game, "Seasinger", "Fallen Empires", "FEM");
  }
}

module.exports = Seasinger;
