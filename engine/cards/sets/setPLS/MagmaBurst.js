"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagmaBurst extends UnimplementedCard {
  constructor(game) {
    super(game, "Magma Burst", "Planeshift", "PLS");
  }
}

module.exports = MagmaBurst;
