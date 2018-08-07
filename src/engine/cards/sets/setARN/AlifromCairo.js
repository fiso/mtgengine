"use strict";
const Constants = require ("../../../Constants");
const AlifromCairoBase = require("../setME4/AlifromCairo");

class AlifromCairo extends AlifromCairoBase {
  constructor (game) {
    super(game, "Ali from Cairo", "Arabian Nights", "ARN");
  }
}

module.exports = AlifromCairo;
