"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RogueSkycaptain extends UnimplementedCard {
  constructor (game) {
    super(game, "Rogue Skycaptain", "Alliances", "ALL");
  }
}

module.exports = RogueSkycaptain;
