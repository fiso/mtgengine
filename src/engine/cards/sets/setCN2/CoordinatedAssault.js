"use strict";
const Constants = require ("../../../Constants");
const CoordinatedAssaultBase = require("../setIMA/CoordinatedAssault");

class CoordinatedAssault extends CoordinatedAssaultBase {
  constructor (game) {
    super(game, "Coordinated Assault", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = CoordinatedAssault;
