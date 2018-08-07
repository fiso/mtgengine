"use strict";
const Constants = require ("../../../Constants");
const KhalniHeartExpeditionBase = require("../setC18/KhalniHeartExpedition");

class KhalniHeartExpedition extends KhalniHeartExpeditionBase {
  constructor (game) {
    super(game, "Khalni Heart Expedition", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = KhalniHeartExpedition;
