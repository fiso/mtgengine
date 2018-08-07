"use strict";
const Constants = require ("../../../Constants");
const RavenousRatsBase = require("../setGVL/RavenousRats");

class RavenousRats extends RavenousRatsBase {
  constructor (game) {
    super(game, "Ravenous Rats", "Urza's Destiny", "UDS");
  }
}

module.exports = RavenousRats;
