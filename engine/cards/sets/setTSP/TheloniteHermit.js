"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TheloniteHermitBase = require("../setARC/TheloniteHermit.js");

class TheloniteHermit extends TheloniteHermitBase {
  constructor(game) {
    super(game, "Thelonite Hermit", "Time Spiral", "TSP");
  }
}

module.exports = TheloniteHermit;
