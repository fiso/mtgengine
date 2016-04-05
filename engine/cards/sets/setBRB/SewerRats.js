"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SewerRats extends UnimplementedCard {
  constructor(game) {
    super(game, "Sewer Rats", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SewerRats;
