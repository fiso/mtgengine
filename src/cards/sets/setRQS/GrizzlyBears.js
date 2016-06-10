"use strict";
const Constants = require ("../../../Constants");
const GrizzlyBearsBase = require("../set6ED/GrizzlyBears");

class GrizzlyBears extends GrizzlyBearsBase {
  constructor (game) {
    super(game, "Grizzly Bears", "Rivals Quick Start Set", "RQS");
  }
}

module.exports = GrizzlyBears;
