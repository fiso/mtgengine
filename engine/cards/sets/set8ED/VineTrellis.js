"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VineTrellisBase = require("../setDD3_GVL/VineTrellis.js");

class VineTrellis extends VineTrellisBase {
  constructor(game) {
    super(game, "Vine Trellis", "Eighth Edition", "8ED");
  }
}

module.exports = VineTrellis;
