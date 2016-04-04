"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GroundAssault extends UnimplementedCard {
  constructor(game) {
    super(game, "Ground Assault", "Gatecrash", "GTC");
  }
}

module.exports = GroundAssault;
