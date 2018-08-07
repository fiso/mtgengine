"use strict";
const Constants = require ("../../../Constants");
const CathedralSanctifierBase = require("../setDDQ/CathedralSanctifier");

class CathedralSanctifier extends CathedralSanctifierBase {
  constructor (game) {
    super(game, "Cathedral Sanctifier", "Avacyn Restored", "AVR");
  }
}

module.exports = CathedralSanctifier;
