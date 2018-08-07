"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DisorientingGlower extends UnimplementedCard {
  constructor (game) {
    super(game, "Disorienting Glower", "Face the Hydra", "TFTH");
  }
}

module.exports = DisorientingGlower;
