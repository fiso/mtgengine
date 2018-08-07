"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolcanoImp extends UnimplementedCard {
  constructor (game) {
    super(game, "Volcano Imp", "Planeshift", "PLS");
  }
}

module.exports = VolcanoImp;
