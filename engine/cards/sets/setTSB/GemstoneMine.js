"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GemstoneMineBase = require("../setpJGP/GemstoneMine.js");

class GemstoneMine extends GemstoneMineBase {
  constructor(game) {
    super(game, "Gemstone Mine", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = GemstoneMine;
