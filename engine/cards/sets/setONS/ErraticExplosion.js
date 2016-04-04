"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ErraticExplosion extends Card {
  constructor(game) {
    super(game, "Erratic Explosion", "Onslaught", "ONS");
  }
}

module.exports = ErraticExplosion;
