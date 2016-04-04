"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VampireBatsBase = require("../setDD3_GVL/VampireBats.js");

class VampireBats extends VampireBatsBase {
  constructor(game) {
    super(game, "Vampire Bats", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = VampireBats;
