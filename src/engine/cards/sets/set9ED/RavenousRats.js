"use strict";
const Constants = require ("../../../Constants");
const RavenousRatsBase = require("../setGVL/RavenousRats");

class RavenousRats extends RavenousRatsBase {
  constructor (game) {
    super(game, "Ravenous Rats", "Ninth Edition", "9ED");
  }
}

module.exports = RavenousRats;
