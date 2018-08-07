"use strict";
const Constants = require ("../../../Constants");
const SivitriScarzamBase = require("../setME3/SivitriScarzam");

class SivitriScarzam extends SivitriScarzamBase {
  constructor (game) {
    super(game, "Sivitri Scarzam", "Chronicles", "CHR");
  }
}

module.exports = SivitriScarzam;
