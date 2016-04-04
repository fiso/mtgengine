"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KhalniHeartExpeditionBase = require("../setDDP/KhalniHeartExpedition.js");

class KhalniHeartExpedition extends KhalniHeartExpeditionBase {
  constructor(game) {
    super(game, "Khalni Heart Expedition", "Zendikar", "ZEN");
  }
}

module.exports = KhalniHeartExpedition;
