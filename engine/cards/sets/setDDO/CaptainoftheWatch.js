"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaptainoftheWatch extends UnimplementedCard {
  constructor(game) {
    super(game, "Captain of the Watch", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = CaptainoftheWatch;
