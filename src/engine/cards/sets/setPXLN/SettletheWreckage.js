"use strict";
const Constants = require ("../../../Constants");
const SettletheWreckageBase = require("../setXLN/SettletheWreckage");

class SettletheWreckage extends SettletheWreckageBase {
  constructor (game) {
    super(game, "Settle the Wreckage", "Ixalan Promos", "PXLN");
  }
}

module.exports = SettletheWreckage;
