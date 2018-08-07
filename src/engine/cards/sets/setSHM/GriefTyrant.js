"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GriefTyrant extends UnimplementedCard {
  constructor (game) {
    super(game, "Grief Tyrant", "Shadowmoor", "SHM");
  }
}

module.exports = GriefTyrant;
