"use strict";
const Constants = require ("../../../Constants");
const WakestoneGargoyleBase = require("../setCNS/WakestoneGargoyle");

class WakestoneGargoyle extends WakestoneGargoyleBase {
  constructor (game) {
    super(game, "Wakestone Gargoyle", "Dissension", "DIS");
  }
}

module.exports = WakestoneGargoyle;
