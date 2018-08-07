"use strict";
const Constants = require ("../../../Constants");
const ErraticExplosionBase = require("../setPCA/ErraticExplosion");

class ErraticExplosion extends ErraticExplosionBase {
  constructor (game) {
    super(game, "Erratic Explosion", "Planechase 2012", "PC2");
  }
}

module.exports = ErraticExplosion;
