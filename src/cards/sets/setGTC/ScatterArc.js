"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScatterArc extends UnimplementedCard {
  constructor (game) {
    super(game, "Scatter Arc", "Gatecrash", "GTC");
  }
}

module.exports = ScatterArc;
