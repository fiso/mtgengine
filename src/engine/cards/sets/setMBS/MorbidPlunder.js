"use strict";
const Constants = require ("../../../Constants");
const MorbidPlunderBase = require("../setTD2/MorbidPlunder");

class MorbidPlunder extends MorbidPlunderBase {
  constructor (game) {
    super(game, "Morbid Plunder", "Mirrodin Besieged", "MBS");
  }
}

module.exports = MorbidPlunder;
