"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LieutenantsoftheGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Lieutenants of the Guard", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = LieutenantsoftheGuard;
