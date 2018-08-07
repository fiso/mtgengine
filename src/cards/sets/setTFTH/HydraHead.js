"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HydraHead extends UnimplementedCard {
  constructor (game) {
    super(game, "Hydra Head", "Face the Hydra", "TFTH");
  }
}

module.exports = HydraHead;
