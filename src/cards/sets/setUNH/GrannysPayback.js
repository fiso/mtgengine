"use strict";
const Constants = require ("../../../Constants");
const GrannysPaybackBase = require("../setpARL/GrannysPayback");

class GrannysPayback extends GrannysPaybackBase {
  constructor (game) {
    super(game, "Granny's Payback", "Unhinged", "UNH");
  }
}

module.exports = GrannysPayback;
