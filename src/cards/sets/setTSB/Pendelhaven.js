"use strict";
const Constants = require ("../../../Constants");
const PendelhavenBase = require("../setATH/Pendelhaven");

class Pendelhaven extends PendelhavenBase {
  constructor(game) {
    super(game, "Pendelhaven", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = Pendelhaven;
