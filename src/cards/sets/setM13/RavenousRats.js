"use strict";
const Constants = require ("../../../Constants");
const RavenousRatsBase = require("../setDD3_GVL/RavenousRats");

class RavenousRats extends RavenousRatsBase {
  constructor (game) {
    super(game, "Ravenous Rats", "Magic 2013", "M13");
  }
}

module.exports = RavenousRats;
