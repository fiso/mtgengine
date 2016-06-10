"use strict";
const Constants = require ("../../../Constants");
const ReprisalBase = require("../setALL/Reprisal");

class Reprisal extends ReprisalBase {
  constructor (game) {
    super(game, "Reprisal", "Masters Edition II", "ME2");
  }
}

module.exports = Reprisal;
