"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CeaseFire extends UnimplementedCard {
  constructor(game) {
    super(game, "Cease-Fire", "Odyssey", "ODY");
  }
}

module.exports = CeaseFire;
