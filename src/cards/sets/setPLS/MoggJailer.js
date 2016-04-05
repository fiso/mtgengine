"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoggJailer extends UnimplementedCard {
  constructor(game) {
    super(game, "Mogg Jailer", "Planeshift", "PLS");
  }
}

module.exports = MoggJailer;
