"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WreckingOgre extends UnimplementedCard {
  constructor(game) {
    super(game, "Wrecking Ogre", "Gatecrash", "GTC");
  }
}

module.exports = WreckingOgre;
