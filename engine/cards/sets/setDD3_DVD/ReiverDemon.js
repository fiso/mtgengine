"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReiverDemon extends Card {
  constructor(game) {
    super(game, "Reiver Demon", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = ReiverDemon;
