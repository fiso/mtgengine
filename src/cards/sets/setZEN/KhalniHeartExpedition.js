"use strict";
const Constants = require ("../../../Constants");
const KhalniHeartExpeditionBase = require("../setC18/KhalniHeartExpedition");

class KhalniHeartExpedition extends KhalniHeartExpeditionBase {
  constructor (game) {
    super(game, "Khalni Heart Expedition", "Zendikar", "ZEN");
  }
}

module.exports = KhalniHeartExpedition;
