"use strict";
const Constants = require ("../../../Constants");
const TimetwisterBase = require("../setVMA/Timetwister");

class Timetwister extends TimetwisterBase {
  constructor (game) {
    super(game, "Timetwister", "Vintage Championship", "OVNT");
  }
}

module.exports = Timetwister;
