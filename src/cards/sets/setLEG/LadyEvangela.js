"use strict";
const Constants = require ("../../../Constants");
const LadyEvangelaBase = require("../setME3/LadyEvangela");

class LadyEvangela extends LadyEvangelaBase {
  constructor (game) {
    super(game, "Lady Evangela", "Legends", "LEG");
  }
}

module.exports = LadyEvangela;
