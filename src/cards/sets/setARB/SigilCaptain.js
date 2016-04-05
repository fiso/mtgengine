"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SigilCaptain extends UnimplementedCard {
  constructor(game) {
    super(game, "Sigil Captain", "Alara Reborn", "ARB");
  }
}

module.exports = SigilCaptain;
