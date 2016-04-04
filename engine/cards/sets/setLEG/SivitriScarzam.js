"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SivitriScarzamBase = require("../setCHR/SivitriScarzam.js");

class SivitriScarzam extends SivitriScarzamBase {
  constructor(game) {
    super(game, "Sivitri Scarzam", "Legends", "LEG");
  }
}

module.exports = SivitriScarzam;
