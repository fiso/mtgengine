"use strict";
const Constants = require ("../../../Constants");
const GermBase = require("../setTCM2/Germ");

class Germ extends GermBase {
  constructor (game) {
    super(game, "Germ", "Commander Anthology Tokens", "TCMA");
  }
}

module.exports = Germ;
