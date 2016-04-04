"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VillageBellRinger extends Card {
  constructor(game) {
    super(game, "Village Bell-Ringer", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = VillageBellRinger;
