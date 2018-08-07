"use strict";
const Constants = require ("../../../Constants");
const MarisisTwinclawsBase = require("../setDDH/MarisisTwinclaws");

class MarisisTwinclaws extends MarisisTwinclawsBase {
  constructor (game) {
    super(game, "Marisi's Twinclaws", "Alara Reborn", "ARB");
  }
}

module.exports = MarisisTwinclaws;
