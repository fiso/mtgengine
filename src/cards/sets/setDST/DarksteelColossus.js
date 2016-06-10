"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarksteelColossus extends UnimplementedCard {
  constructor (game) {
    super(game, "Darksteel Colossus", "Darksteel", "DST");
  }
}

module.exports = DarksteelColossus;
