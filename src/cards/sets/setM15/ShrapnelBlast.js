"use strict";
const Constants = require ("../../../Constants");
const ShrapnelBlastBase = require("../setpFNM/ShrapnelBlast");

class ShrapnelBlast extends ShrapnelBlastBase {
  constructor (game) {
    super(game, "Shrapnel Blast", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ShrapnelBlast;
