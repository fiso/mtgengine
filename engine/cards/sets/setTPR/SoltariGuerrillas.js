"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoltariGuerrillasBase = require("../setTMP/SoltariGuerrillas.js");

class SoltariGuerrillas extends SoltariGuerrillasBase {
  constructor(game) {
    super(game, "Soltari Guerrillas", "Tempest Remastered", "TPR");
  }
}

module.exports = SoltariGuerrillas;
