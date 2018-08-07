"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IchorExplosion extends UnimplementedCard {
  constructor (game) {
    super(game, "Ichor Explosion", "New Phyrexia", "NPH");
  }
}

module.exports = IchorExplosion;
