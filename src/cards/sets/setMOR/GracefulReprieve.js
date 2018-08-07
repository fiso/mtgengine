"use strict";
const Constants = require ("../../../Constants");
const GracefulReprieveBase = require("../setMM3/GracefulReprieve");

class GracefulReprieve extends GracefulReprieveBase {
  constructor (game) {
    super(game, "Graceful Reprieve", "Morningtide", "MOR");
  }
}

module.exports = GracefulReprieve;
