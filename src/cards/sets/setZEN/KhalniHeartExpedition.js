"use strict";
const Constants = require ("../../../Constants");
const KhalniHeartExpeditionBase = require("../setDDP/KhalniHeartExpedition");

class KhalniHeartExpedition extends KhalniHeartExpeditionBase {
  constructor (game) {
    super(game, "Khalni Heart Expedition", "Zendikar", "ZEN");
  }
}

module.exports = KhalniHeartExpedition;
