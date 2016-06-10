"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReiverDemon extends UnimplementedCard {
  constructor (game) {
    super(game, "Reiver Demon", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = ReiverDemon;
