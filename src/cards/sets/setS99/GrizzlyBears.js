"use strict";
const Constants = require ("../../../Constants");
const GrizzlyBearsBase = require("../set10E/GrizzlyBears");

class GrizzlyBears extends GrizzlyBearsBase {
  constructor (game) {
    super(game, "Grizzly Bears", "Starter 1999", "S99");
  }
}

module.exports = GrizzlyBears;
