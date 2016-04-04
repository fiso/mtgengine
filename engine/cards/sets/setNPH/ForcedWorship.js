"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForcedWorship extends UnimplementedCard {
  constructor(game) {
    super(game, "Forced Worship", "New Phyrexia", "NPH");
  }
}

module.exports = ForcedWorship;
