"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RingofRenewal extends UnimplementedCard {
  constructor(game) {
    super(game, "Ring of Renewal", "Fallen Empires", "FEM");
  }
}

module.exports = RingofRenewal;
