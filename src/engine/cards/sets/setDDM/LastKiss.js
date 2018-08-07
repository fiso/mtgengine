"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LastKiss extends UnimplementedCard {
  constructor (game) {
    super(game, "Last Kiss", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = LastKiss;
