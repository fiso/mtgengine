"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hindervines extends UnimplementedCard {
  constructor(game) {
    super(game, "Hindervines", "Gatecrash", "GTC");
  }
}

module.exports = Hindervines;
