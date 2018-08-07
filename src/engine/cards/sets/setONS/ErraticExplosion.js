"use strict";
const Constants = require ("../../../Constants");
const ErraticExplosionBase = require("../setPCA/ErraticExplosion");

class ErraticExplosion extends ErraticExplosionBase {
  constructor (game) {
    super(game, "Erratic Explosion", "Onslaught", "ONS");
  }
}

module.exports = ErraticExplosion;
