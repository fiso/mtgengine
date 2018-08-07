"use strict";
const Constants = require ("../../../Constants");
const ConstantMistsBase = require("../setTD0/ConstantMists");

class ConstantMists extends ConstantMistsBase {
  constructor (game) {
    super(game, "Constant Mists", "Stronghold", "STH");
  }
}

module.exports = ConstantMists;
