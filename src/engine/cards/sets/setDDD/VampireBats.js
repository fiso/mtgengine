"use strict";
const Constants = require ("../../../Constants");
const VampireBatsBase = require("../setGVL/VampireBats");

class VampireBats extends VampireBatsBase {
  constructor (game) {
    super(game, "Vampire Bats", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = VampireBats;
