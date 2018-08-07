"use strict";
const Constants = require ("../../../Constants");
const JhessianThiefBase = require("../setIMA/JhessianThief");

class JhessianThief extends JhessianThiefBase {
  constructor (game) {
    super(game, "Jhessian Thief", "Magic Origins", "ORI");
  }
}

module.exports = JhessianThief;
