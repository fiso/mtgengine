"use strict";
const Constants = require ("../../../Constants");
const FeralThrowbackBase = require("../setLGN/FeralThrowback");

class FeralThrowback extends FeralThrowbackBase {
  constructor (game) {
    super(game, "Feral Throwback", "Magic Online Promos", "PRM");
  }
}

module.exports = FeralThrowback;
