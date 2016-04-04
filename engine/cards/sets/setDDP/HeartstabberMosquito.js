"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeartstabberMosquito extends UnimplementedCard {
  constructor(game) {
    super(game, "Heartstabber Mosquito", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = HeartstabberMosquito;
