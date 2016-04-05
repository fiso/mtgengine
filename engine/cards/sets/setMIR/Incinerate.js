"use strict";
const Constants = require ("../../../Constants");
const IncinerateBase = require("../setCST/Incinerate");

class Incinerate extends IncinerateBase {
  constructor(game) {
    super(game, "Incinerate", "Mirage", "MIR");
  }
}

module.exports = Incinerate;
