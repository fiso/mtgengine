"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ErraticExplosion extends UnimplementedCard {
  constructor(game) {
    super(game, "Erratic Explosion", "Onslaught", "ONS");
  }
}

module.exports = ErraticExplosion;
