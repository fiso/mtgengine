"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LadyCaleriaBase = require("../setLEG/LadyCaleria.js");

class LadyCaleria extends LadyCaleriaBase {
  constructor(game) {
    super(game, "Lady Caleria", "Masters Edition III", "ME3");
  }
}

module.exports = LadyCaleria;
