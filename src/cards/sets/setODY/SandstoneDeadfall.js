"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SandstoneDeadfall extends UnimplementedCard {
  constructor(game) {
    super(game, "Sandstone Deadfall", "Odyssey", "ODY");
  }
}

module.exports = SandstoneDeadfall;
