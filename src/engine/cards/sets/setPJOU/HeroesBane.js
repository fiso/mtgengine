"use strict";
const Constants = require ("../../../Constants");
const HeroesBaneBase = require("../setIMA/HeroesBane");

class HeroesBane extends HeroesBaneBase {
  constructor (game) {
    super(game, "Heroes' Bane", "Journey into Nyx Promos", "PJOU");
  }
}

module.exports = HeroesBane;
