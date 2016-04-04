"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RubiniaSoulsingerBase = require("../setCHR/RubiniaSoulsinger.js");

class RubiniaSoulsinger extends RubiniaSoulsingerBase {
  constructor(game) {
    super(game, "Rubinia Soulsinger", "Legends", "LEG");
  }
}

module.exports = RubiniaSoulsinger;
