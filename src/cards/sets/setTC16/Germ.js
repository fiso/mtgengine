"use strict";
const Constants = require ("../../../Constants");
const GermBase = require("../setTCM2/Germ");

class Germ extends GermBase {
  constructor (game) {
    super(game, "Germ", "Commander 2016 Tokens", "TC16");
  }
}

module.exports = Germ;
