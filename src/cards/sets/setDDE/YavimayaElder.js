"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YavimayaElder extends UnimplementedCard {
  constructor (game) {
    super(game, "Yavimaya Elder", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = YavimayaElder;
