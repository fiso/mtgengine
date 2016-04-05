"use strict";
const Constants = require ("../../../Constants");
const LadyEvangelaBase = require("../setLEG/LadyEvangela");

class LadyEvangela extends LadyEvangelaBase {
  constructor(game) {
    super(game, "Lady Evangela", "Masters Edition III", "ME3");
  }
}

module.exports = LadyEvangela;
