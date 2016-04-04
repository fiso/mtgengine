"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EssenceVortex extends Card {
  constructor(game) {
    super(game, "Essence Vortex", "Ice Age", "ICE");
  }
}

module.exports = EssenceVortex;
