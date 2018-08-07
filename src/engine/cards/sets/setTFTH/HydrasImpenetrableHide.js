"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HydrasImpenetrableHide extends UnimplementedCard {
  constructor (game) {
    super(game, "Hydra's Impenetrable Hide", "Face the Hydra", "TFTH");
  }
}

module.exports = HydrasImpenetrableHide;
