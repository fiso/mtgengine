"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VandalblastBase = require("../setC15/Vandalblast.js");

class Vandalblast extends VandalblastBase {
  constructor(game) {
    super(game, "Vandalblast", "Return to Ravnica", "RTR");
  }
}

module.exports = Vandalblast;
