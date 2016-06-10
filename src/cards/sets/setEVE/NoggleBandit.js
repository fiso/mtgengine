"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NoggleBandit extends UnimplementedCard {
  constructor (game) {
    super(game, "Noggle Bandit", "Eventide", "EVE");
  }
}

module.exports = NoggleBandit;
