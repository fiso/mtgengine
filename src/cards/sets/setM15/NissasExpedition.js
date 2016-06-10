"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NissasExpedition extends UnimplementedCard {
  constructor (game) {
    super(game, "Nissa's Expedition", "Magic 2015 Core Set", "M15");
  }
}

module.exports = NissasExpedition;
