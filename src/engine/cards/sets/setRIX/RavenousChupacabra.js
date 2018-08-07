"use strict";
const Constants = require ("../../../Constants");
const RavenousChupacabraBase = require("../setA25/RavenousChupacabra");

class RavenousChupacabra extends RavenousChupacabraBase {
  constructor (game) {
    super(game, "Ravenous Chupacabra", "Rivals of Ixalan", "RIX");
  }
}

module.exports = RavenousChupacabra;
