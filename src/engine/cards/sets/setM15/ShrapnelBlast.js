"use strict";
const Constants = require ("../../../Constants");
const ShrapnelBlastBase = require("../setDDU/ShrapnelBlast");

class ShrapnelBlast extends ShrapnelBlastBase {
  constructor (game) {
    super(game, "Shrapnel Blast", "Magic 2015", "M15");
  }
}

module.exports = ShrapnelBlast;
