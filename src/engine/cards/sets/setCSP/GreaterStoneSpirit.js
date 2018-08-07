"use strict";
const Constants = require ("../../../Constants");
const GreaterStoneSpiritBase = require("../setDDI/GreaterStoneSpirit");

class GreaterStoneSpirit extends GreaterStoneSpiritBase {
  constructor (game) {
    super(game, "Greater Stone Spirit", "Coldsnap", "CSP");
  }
}

module.exports = GreaterStoneSpirit;
