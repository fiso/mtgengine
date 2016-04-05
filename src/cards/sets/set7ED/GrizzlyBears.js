"use strict";
const Constants = require ("../../../Constants");
const GrizzlyBearsBase = require("../set6ED/GrizzlyBears");

class GrizzlyBears extends GrizzlyBearsBase {
  constructor(game) {
    super(game, "Grizzly Bears", "Seventh Edition", "7ED");
  }
}

module.exports = GrizzlyBears;
