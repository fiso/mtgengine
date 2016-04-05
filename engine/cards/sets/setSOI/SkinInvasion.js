"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkinInvasion extends UnimplementedCard {
  constructor(game) {
    super(game, "Skin Invasion", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SkinInvasion;
