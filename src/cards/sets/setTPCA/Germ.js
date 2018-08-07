"use strict";
const Constants = require ("../../../Constants");
const GermBase = require("../setTCM2/Germ");

class Germ extends GermBase {
  constructor (game) {
    super(game, "Germ", "Planechase Anthology Tokens", "TPCA");
  }
}

module.exports = Germ;
