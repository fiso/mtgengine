"use strict";
const Constants = require ("../../../Constants");
const RavenousRatsBase = require("../setDD3_GVL/RavenousRats");

class RavenousRats extends RavenousRatsBase {
  constructor (game) {
    super(game, "Ravenous Rats", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = RavenousRats;
