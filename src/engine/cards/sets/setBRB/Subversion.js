"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Subversion extends UnimplementedCard {
  constructor (game) {
    super(game, "Subversion", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Subversion;
