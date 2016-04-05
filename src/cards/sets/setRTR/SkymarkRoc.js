"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkymarkRoc extends UnimplementedCard {
  constructor(game) {
    super(game, "Skymark Roc", "Return to Ravnica", "RTR");
  }
}

module.exports = SkymarkRoc;
