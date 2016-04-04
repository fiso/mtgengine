"use strict";
const Constants = require ("../../../Constants");
const CoatofArmsBase = require("../setDPA/CoatofArms");

class CoatofArms extends CoatofArmsBase {
  constructor(game) {
    super(game, "Coat of Arms", "Tempest Remastered", "TPR");
  }
}

module.exports = CoatofArms;
