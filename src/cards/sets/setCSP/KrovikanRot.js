"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrovikanRot extends UnimplementedCard {
  constructor(game) {
    super(game, "Krovikan Rot", "Coldsnap", "CSP");
  }
}

module.exports = KrovikanRot;
