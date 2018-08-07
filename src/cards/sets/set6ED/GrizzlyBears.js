"use strict";
const Constants = require ("../../../Constants");
const GrizzlyBearsBase = require("../set10E/GrizzlyBears");

class GrizzlyBears extends GrizzlyBearsBase {
  constructor (game) {
    super(game, "Grizzly Bears", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GrizzlyBears;
