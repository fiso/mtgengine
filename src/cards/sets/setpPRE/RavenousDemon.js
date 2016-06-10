"use strict";
const Constants = require ("../../../Constants");
const RavenousDemonBase = require("../setDKA/RavenousDemon");

class RavenousDemon extends RavenousDemonBase {
  constructor (game) {
    super(game, "Ravenous Demon", "Prerelease Events", "pPRE");
  }
}

module.exports = RavenousDemon;
