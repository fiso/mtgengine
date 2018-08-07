"use strict";
const Constants = require ("../../../Constants");
const CastDownBase = require("../setDOM/CastDown");

class CastDown extends CastDownBase {
  constructor (game) {
    super(game, "Cast Down", "Magic Online Promos", "PRM");
  }
}

module.exports = CastDown;
