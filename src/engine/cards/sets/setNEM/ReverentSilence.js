"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReverentSilence extends UnimplementedCard {
  constructor (game) {
    super(game, "Reverent Silence", "Nemesis", "NEM");
  }
}

module.exports = ReverentSilence;
