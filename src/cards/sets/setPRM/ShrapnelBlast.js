"use strict";
const Constants = require ("../../../Constants");
const ShrapnelBlastBase = require("../setDDU/ShrapnelBlast");

class ShrapnelBlast extends ShrapnelBlastBase {
  constructor (game) {
    super(game, "Shrapnel Blast", "Magic Online Promos", "PRM");
  }
}

module.exports = ShrapnelBlast;
