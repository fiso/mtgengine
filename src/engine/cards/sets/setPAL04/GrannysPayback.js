"use strict";
const Constants = require ("../../../Constants");
const GrannysPaybackBase = require("../setUNH/GrannysPayback");

class GrannysPayback extends GrannysPaybackBase {
  constructor (game) {
    super(game, "Granny's Payback", "Arena League 2004", "PAL04");
  }
}

module.exports = GrannysPayback;
