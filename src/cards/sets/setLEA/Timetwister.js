"use strict";
const Constants = require ("../../../Constants");
const TimetwisterBase = require("../setCED/Timetwister");

class Timetwister extends TimetwisterBase {
  constructor(game) {
    super(game, "Timetwister", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Timetwister;
