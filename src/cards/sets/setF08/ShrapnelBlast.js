"use strict";
const Constants = require ("../../../Constants");
const ShrapnelBlastBase = require("../setDDU/ShrapnelBlast");

class ShrapnelBlast extends ShrapnelBlastBase {
  constructor (game) {
    super(game, "Shrapnel Blast", "Friday Night Magic 2008", "F08");
  }
}

module.exports = ShrapnelBlast;
