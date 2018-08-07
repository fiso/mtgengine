"use strict";
const Constants = require ("../../../Constants");
const CobraTrapBase = require("../setC15/CobraTrap");

class CobraTrap extends CobraTrapBase {
  constructor (game) {
    super(game, "Cobra Trap", "Commander 2011", "CMD");
  }
}

module.exports = CobraTrap;
