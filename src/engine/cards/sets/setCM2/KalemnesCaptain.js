"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KalemnesCaptain extends UnimplementedCard {
  constructor (game) {
    super(game, "Kalemne's Captain", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = KalemnesCaptain;
