"use strict";
const Constants = require ("../../../Constants");
const GemstoneMineBase = require("../setpJGP/GemstoneMine");

class GemstoneMine extends GemstoneMineBase {
  constructor (game) {
    super(game, "Gemstone Mine", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = GemstoneMine;
