"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LinvalaKeeperofSilence extends UnimplementedCard {
  constructor(game) {
    super(game, "Linvala, Keeper of Silence", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LinvalaKeeperofSilence;
