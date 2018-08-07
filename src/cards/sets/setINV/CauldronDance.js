"use strict";
const Constants = require ("../../../Constants");
const CauldronDanceBase = require("../setC17/CauldronDance");

class CauldronDance extends CauldronDanceBase {
  constructor (game) {
    super(game, "Cauldron Dance", "Invasion", "INV");
  }
}

module.exports = CauldronDance;
