"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AuspiciousAncestor extends Card {
  constructor(game) {
    super(game, "Auspicious Ancestor", "Mirage", "MIR");
  }
}

module.exports = AuspiciousAncestor;
