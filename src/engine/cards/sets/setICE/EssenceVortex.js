"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EssenceVortex extends UnimplementedCard {
  constructor (game) {
    super(game, "Essence Vortex", "Ice Age", "ICE");
  }
}

module.exports = EssenceVortex;
