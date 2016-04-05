"use strict";
const Constants = require ("../../../Constants");
const ReiverDemonBase = require("../setDD3_DVD/ReiverDemon");

class ReiverDemon extends ReiverDemonBase {
  constructor(game) {
    super(game, "Reiver Demon", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = ReiverDemon;
