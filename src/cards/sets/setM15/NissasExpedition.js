"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NissasExpedition extends UnimplementedCard {
  constructor (game) {
    super(game, "Nissa's Expedition", "Magic 2015", "M15");
  }
}

module.exports = NissasExpedition;
