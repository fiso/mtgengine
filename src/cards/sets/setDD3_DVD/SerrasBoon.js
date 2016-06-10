"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerrasBoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Serra's Boon", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = SerrasBoon;
