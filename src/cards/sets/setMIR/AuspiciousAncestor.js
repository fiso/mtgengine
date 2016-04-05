"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuspiciousAncestor extends UnimplementedCard {
  constructor(game) {
    super(game, "Auspicious Ancestor", "Mirage", "MIR");
  }
}

module.exports = AuspiciousAncestor;
