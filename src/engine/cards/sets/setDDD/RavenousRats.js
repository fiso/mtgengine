"use strict";
const Constants = require ("../../../Constants");
const RavenousRatsBase = require("../setGVL/RavenousRats");

class RavenousRats extends RavenousRatsBase {
  constructor (game) {
    super(game, "Ravenous Rats", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = RavenousRats;
