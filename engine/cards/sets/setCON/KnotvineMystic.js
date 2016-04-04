"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnotvineMystic extends UnimplementedCard {
  constructor(game) {
    super(game, "Knotvine Mystic", "Conflux", "CON");
  }
}

module.exports = KnotvineMystic;
