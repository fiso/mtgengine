"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RavenousDemonBase = require("../setDKA/RavenousDemon.js");

class RavenousDemon extends RavenousDemonBase {
  constructor(game) {
    super(game, "Ravenous Demon", "Prerelease Events", "pPRE");
  }
}

module.exports = RavenousDemon;
