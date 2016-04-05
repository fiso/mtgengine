"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZektarShrineExpedition extends UnimplementedCard {
  constructor(game) {
    super(game, "Zektar Shrine Expedition", "Zendikar", "ZEN");
  }
}

module.exports = ZektarShrineExpedition;
