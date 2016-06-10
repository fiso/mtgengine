"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VillageBellRinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Village Bell-Ringer", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = VillageBellRinger;
