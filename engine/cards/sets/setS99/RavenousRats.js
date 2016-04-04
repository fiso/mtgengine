"use strict";
const Constants = require ("../../../Constants");
const RavenousRatsBase = require("../setDD3_GVL/RavenousRats");

class RavenousRats extends RavenousRatsBase {
  constructor(game) {
    super(game, "Ravenous Rats", "Starter 1999", "S99");
  }
}

module.exports = RavenousRats;
