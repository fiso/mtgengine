"use strict";
const Constants = require ("../../../Constants");
const DragonstormBase = require("../setDRB/Dragonstorm");

class Dragonstorm extends DragonstormBase {
  constructor (game) {
    super(game, "Dragonstorm", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = Dragonstorm;
