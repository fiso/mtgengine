"use strict";
const Constants = require ("../../../Constants");
const HeroesBaneBase = require("../setIMA/HeroesBane");

class HeroesBane extends HeroesBaneBase {
  constructor (game) {
    super(game, "Heroes' Bane", "Magic Online Promos", "PRM");
  }
}

module.exports = HeroesBane;
