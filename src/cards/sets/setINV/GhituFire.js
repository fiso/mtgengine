"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhituFire extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghitu Fire", "Invasion", "INV");
  }
}

module.exports = GhituFire;
