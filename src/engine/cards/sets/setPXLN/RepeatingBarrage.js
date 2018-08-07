"use strict";
const Constants = require ("../../../Constants");
const RepeatingBarrageBase = require("../setXLN/RepeatingBarrage");

class RepeatingBarrage extends RepeatingBarrageBase {
  constructor (game) {
    super(game, "Repeating Barrage", "Ixalan Promos", "PXLN");
  }
}

module.exports = RepeatingBarrage;
