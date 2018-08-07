"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TourachsChant extends UnimplementedCard {
  constructor (game) {
    super(game, "Tourach's Chant", "Fallen Empires", "FEM");
  }
}

module.exports = TourachsChant;
