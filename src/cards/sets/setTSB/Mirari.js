"use strict";
const Constants = require ("../../../Constants");
const MirariBase = require("../setC13/Mirari");

class Mirari extends MirariBase {
  constructor (game) {
    super(game, "Mirari", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = Mirari;
