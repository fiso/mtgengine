"use strict";
const Constants = require ("../../../Constants");
const HeroofGomaFadaBase = require("../setBFZ/HeroofGomaFada");

class HeroofGomaFada extends HeroofGomaFadaBase {
  constructor (game) {
    super(game, "Hero of Goma Fada", "Magic Online Promos", "PRM");
  }
}

module.exports = HeroofGomaFada;
