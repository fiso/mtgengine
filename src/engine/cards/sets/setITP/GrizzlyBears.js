"use strict";
const Constants = require ("../../../Constants");
const GrizzlyBearsBase = require("../set10E/GrizzlyBears");

class GrizzlyBears extends GrizzlyBearsBase {
  constructor (game) {
    super(game, "Grizzly Bears", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = GrizzlyBears;
