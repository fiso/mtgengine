"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HellionEruption extends UnimplementedCard {
  constructor(game) {
    super(game, "Hellion Eruption", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = HellionEruption;
