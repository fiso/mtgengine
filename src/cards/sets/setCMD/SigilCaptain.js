"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SigilCaptain extends UnimplementedCard {
  constructor (game) {
    super(game, "Sigil Captain", "Commander 2011", "CMD");
  }
}

module.exports = SigilCaptain;
