"use strict";
const Constants = require ("../../../Constants");
const OxidizeBase = require("../setP05/Oxidize");

class Oxidize extends OxidizeBase {
  constructor (game) {
    super(game, "Oxidize", "Darksteel", "DST");
  }
}

module.exports = Oxidize;
