"use strict";
const Constants = require ("../../../Constants");
const TrinketMageBase = require("../setDDU/TrinketMage");

class TrinketMage extends TrinketMageBase {
  constructor (game) {
    super(game, "Trinket Mage", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = TrinketMage;
