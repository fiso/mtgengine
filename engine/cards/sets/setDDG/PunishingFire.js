"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PunishingFire extends Card {
  constructor(game) {
    super(game, "Punishing Fire", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = PunishingFire;
