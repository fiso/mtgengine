"use strict";
const Constants = require ("../../../Constants");
const VinesofVastwoodBase = require("../setMM2/VinesofVastwood");

class VinesofVastwood extends VinesofVastwoodBase {
  constructor (game) {
    super(game, "Vines of Vastwood", "Zendikar", "ZEN");
  }
}

module.exports = VinesofVastwood;
