"use strict";
const Constants = require ("../../../Constants");
const DesertBase = require("../setARN/Desert");

class Desert extends DesertBase {
  constructor(game) {
    super(game, "Desert", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = Desert;
