"use strict";
const Constants = require ("../../../Constants");
const GontisAetherHeartBase = require("../setAER/GontisAetherHeart");

class GontisAetherHeart extends GontisAetherHeartBase {
  constructor (game) {
    super(game, "Gonti's Aether Heart", "Aether Revolt Promos", "PAER");
  }
}

module.exports = GontisAetherHeart;
