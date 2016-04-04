"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VineTrellisBase = require("../setDD3_GVL/VineTrellis.js");

class VineTrellis extends VineTrellisBase {
  constructor(game) {
    super(game, "Vine Trellis", "Mercadian Masques", "MMQ");
  }
}

module.exports = VineTrellis;
