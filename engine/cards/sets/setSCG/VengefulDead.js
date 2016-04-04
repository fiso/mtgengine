"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VengefulDead extends UnimplementedCard {
  constructor(game) {
    super(game, "Vengeful Dead", "Scourge", "SCG");
  }
}

module.exports = VengefulDead;
