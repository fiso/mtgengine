"use strict";
const Constants = require ("../../../Constants");
const GemstoneMineBase = require("../setpJGP/GemstoneMine");

class GemstoneMine extends GemstoneMineBase {
  constructor (game) {
    super(game, "Gemstone Mine", "Weatherlight", "WTH");
  }
}

module.exports = GemstoneMine;
