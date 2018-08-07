"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RetreattoValakut extends UnimplementedCard {
  constructor (game) {
    super(game, "Retreat to Valakut", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RetreattoValakut;
