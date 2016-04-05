"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampiricLink extends UnimplementedCard {
  constructor(game) {
    super(game, "Vampiric Link", "Planar Chaos", "PLC");
  }
}

module.exports = VampiricLink;
