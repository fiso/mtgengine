"use strict";
const Constants = require ("../../../Constants");
const KhalniHeartExpeditionBase = require("../setC18/KhalniHeartExpedition");

class KhalniHeartExpedition extends KhalniHeartExpeditionBase {
  constructor (game) {
    super(game, "Khalni Heart Expedition", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = KhalniHeartExpedition;
