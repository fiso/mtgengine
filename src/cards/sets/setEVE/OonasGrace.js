"use strict";
const Constants = require ("../../../Constants");
const OonasGraceBase = require("../setEMA/OonasGrace");

class OonasGrace extends OonasGraceBase {
  constructor (game) {
    super(game, "Oona's Grace", "Eventide", "EVE");
  }
}

module.exports = OonasGrace;
