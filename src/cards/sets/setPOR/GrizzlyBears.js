"use strict";
const Constants = require ("../../../Constants");
const GrizzlyBearsBase = require("../set6ED/GrizzlyBears");

class GrizzlyBears extends GrizzlyBearsBase {
  constructor (game) {
    super(game, "Grizzly Bears", "Portal", "POR");
  }
}

module.exports = GrizzlyBears;
