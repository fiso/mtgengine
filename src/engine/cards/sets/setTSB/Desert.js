"use strict";
const Constants = require ("../../../Constants");
const DesertBase = require("../setV12/Desert");

class Desert extends DesertBase {
  constructor (game) {
    super(game, "Desert", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = Desert;
