"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KhalniHeartExpedition extends UnimplementedCard {
  constructor (game) {
    super(game, "Khalni Heart Expedition", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = KhalniHeartExpedition;
