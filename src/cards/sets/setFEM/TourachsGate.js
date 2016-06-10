"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TourachsGate extends UnimplementedCard {
  constructor (game) {
    super(game, "Tourach's Gate", "Fallen Empires", "FEM");
  }
}

module.exports = TourachsGate;
