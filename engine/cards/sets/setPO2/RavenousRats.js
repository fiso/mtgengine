"use strict";
const Constants = require ("../../../Constants");
const RavenousRatsBase = require("../setDD3_GVL/RavenousRats");

class RavenousRats extends RavenousRatsBase {
  constructor(game) {
    super(game, "Ravenous Rats", "Portal Second Age", "PO2");
  }
}

module.exports = RavenousRats;
