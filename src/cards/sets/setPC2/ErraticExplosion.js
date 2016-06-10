"use strict";
const Constants = require ("../../../Constants");
const ErraticExplosionBase = require("../setONS/ErraticExplosion");

class ErraticExplosion extends ErraticExplosionBase {
  constructor (game) {
    super(game, "Erratic Explosion", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = ErraticExplosion;
