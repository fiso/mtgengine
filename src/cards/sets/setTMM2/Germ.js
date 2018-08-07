"use strict";
const Constants = require ("../../../Constants");
const GermBase = require("../setTCM2/Germ");

class Germ extends GermBase {
  constructor (game) {
    super(game, "Germ", "Modern Masters 2015 Tokens", "TMM2");
  }
}

module.exports = Germ;
