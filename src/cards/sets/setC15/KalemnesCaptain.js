"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KalemnesCaptain extends UnimplementedCard {
  constructor (game) {
    super(game, "Kalemne's Captain", "Commander 2015", "C15");
  }
}

module.exports = KalemnesCaptain;
