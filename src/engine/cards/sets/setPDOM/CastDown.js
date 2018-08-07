"use strict";
const Constants = require ("../../../Constants");
const CastDownBase = require("../setDOM/CastDown");

class CastDown extends CastDownBase {
  constructor (game) {
    super(game, "Cast Down", "Dominaria Promos", "PDOM");
  }
}

module.exports = CastDown;
