"use strict";
const Constants = require ("../../../Constants");
const GrizzlyBearsBase = require("../set10E/GrizzlyBears");

class GrizzlyBears extends GrizzlyBearsBase {
  constructor (game) {
    super(game, "Grizzly Bears", "Ninth Edition", "9ED");
  }
}

module.exports = GrizzlyBears;
