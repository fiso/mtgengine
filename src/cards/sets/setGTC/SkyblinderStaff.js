"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkyblinderStaff extends UnimplementedCard {
  constructor(game) {
    super(game, "Skyblinder Staff", "Gatecrash", "GTC");
  }
}

module.exports = SkyblinderStaff;
