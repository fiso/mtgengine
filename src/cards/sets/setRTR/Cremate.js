"use strict";
const Constants = require ("../../../Constants");
const CremateBase = require("../setGPT/Cremate");

class Cremate extends CremateBase {
  constructor(game) {
    super(game, "Cremate", "Return to Ravnica", "RTR");
  }
}

module.exports = Cremate;
