"use strict";
const Constants = require ("../../../Constants");
const CoordinatedAssaultBase = require("../setIMA/CoordinatedAssault");

class CoordinatedAssault extends CoordinatedAssaultBase {
  constructor (game) {
    super(game, "Coordinated Assault", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = CoordinatedAssault;
