"use strict";
const Constants = require ("../../../Constants");
const RavenousLeucrocotaBase = require("../setCN2/RavenousLeucrocota");

class RavenousLeucrocota extends RavenousLeucrocotaBase {
  constructor (game) {
    super(game, "Ravenous Leucrocota", "Journey into Nyx", "JOU");
  }
}

module.exports = RavenousLeucrocota;
