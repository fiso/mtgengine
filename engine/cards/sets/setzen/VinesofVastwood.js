"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VinesofVastwoodBase = require("../setMM2/VinesofVastwood.js");

class VinesofVastwood extends VinesofVastwoodBase {
  constructor(game) {
    super(game, "Vines of Vastwood", "Zendikar", "ZEN");
  }
}

module.exports = VinesofVastwood;
