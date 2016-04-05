"use strict";
const Constants = require ("../../../Constants");
const AlifromCairoBase = require("../setARN/AlifromCairo");

class AlifromCairo extends AlifromCairoBase {
  constructor(game) {
    super(game, "Ali from Cairo", "Masters Edition IV", "ME4");
  }
}

module.exports = AlifromCairo;
