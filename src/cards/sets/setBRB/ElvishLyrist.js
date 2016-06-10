"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishLyrist extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Lyrist", "Battle Royale Box Set", "BRB");
  }
}

module.exports = ElvishLyrist;
