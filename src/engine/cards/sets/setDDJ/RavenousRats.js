"use strict";
const Constants = require ("../../../Constants");
const RavenousRatsBase = require("../setGVL/RavenousRats");

class RavenousRats extends RavenousRatsBase {
  constructor (game) {
    super(game, "Ravenous Rats", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = RavenousRats;
