"use strict";
const Constants = require ("../../../Constants");
const CobraTrapBase = require("../setC15/CobraTrap");

class CobraTrap extends CobraTrapBase {
  constructor (game) {
    super(game, "Cobra Trap", "Zendikar", "ZEN");
  }
}

module.exports = CobraTrap;
