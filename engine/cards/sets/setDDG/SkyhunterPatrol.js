"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkyhunterPatrol extends Card {
  constructor(game) {
    super(game, "Skyhunter Patrol", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = SkyhunterPatrol;
