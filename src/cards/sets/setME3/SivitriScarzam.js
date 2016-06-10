"use strict";
const Constants = require ("../../../Constants");
const SivitriScarzamBase = require("../setCHR/SivitriScarzam");

class SivitriScarzam extends SivitriScarzamBase {
  constructor (game) {
    super(game, "Sivitri Scarzam", "Masters Edition III", "ME3");
  }
}

module.exports = SivitriScarzam;
