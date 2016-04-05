"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Bog Elemental", "Prophecy", "PCY");
  }
}

module.exports = BogElemental;
