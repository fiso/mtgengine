"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YavimayaElder extends Card {
  constructor(game) {
    super(game, "Yavimaya Elder", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = YavimayaElder;
