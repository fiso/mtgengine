"use strict";
const Constants = require ("../../../Constants");
const VineTrellisBase = require("../setGVL/VineTrellis");

class VineTrellis extends VineTrellisBase {
  constructor (game) {
    super(game, "Vine Trellis", "Mercadian Masques", "MMQ");
  }
}

module.exports = VineTrellis;
