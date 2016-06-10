"use strict";
const Constants = require ("../../../Constants");
const ShrapnelBlastBase = require("../setpFNM/ShrapnelBlast");

class ShrapnelBlast extends ShrapnelBlastBase {
  constructor (game) {
    super(game, "Shrapnel Blast", "Modern Masters", "MMA");
  }
}

module.exports = ShrapnelBlast;
