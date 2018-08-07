"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SimicManipulator extends UnimplementedCard {
  constructor (game) {
    super(game, "Simic Manipulator", "Gatecrash", "GTC");
  }
}

module.exports = SimicManipulator;
