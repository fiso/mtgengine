"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunspringExpedition extends UnimplementedCard {
  constructor(game) {
    super(game, "Sunspring Expedition", "Zendikar", "ZEN");
  }
}

module.exports = SunspringExpedition;
