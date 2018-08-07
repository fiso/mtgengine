"use strict";
const Constants = require ("../../../Constants");
const ReiverDemonBase = require("../setCMA/ReiverDemon");

class ReiverDemon extends ReiverDemonBase {
  constructor (game) {
    super(game, "Reiver Demon", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = ReiverDemon;
