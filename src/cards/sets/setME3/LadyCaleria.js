"use strict";
const Constants = require ("../../../Constants");
const LadyCaleriaBase = require("../setLEG/LadyCaleria");

class LadyCaleria extends LadyCaleriaBase {
  constructor(game) {
    super(game, "Lady Caleria", "Masters Edition III", "ME3");
  }
}

module.exports = LadyCaleria;
