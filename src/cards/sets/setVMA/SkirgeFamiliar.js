"use strict";
const Constants = require ("../../../Constants");
const SkirgeFamiliarBase = require("../setUSG/SkirgeFamiliar");

class SkirgeFamiliar extends SkirgeFamiliarBase {
  constructor (game) {
    super(game, "Skirge Familiar", "Vintage Masters", "VMA");
  }
}

module.exports = SkirgeFamiliar;
