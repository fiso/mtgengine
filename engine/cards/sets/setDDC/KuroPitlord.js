"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KuroPitlordBase = require("../setCHK/KuroPitlord.js");

class KuroPitlord extends KuroPitlordBase {
  constructor(game) {
    super(game, "Kuro, Pitlord", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = KuroPitlord;
