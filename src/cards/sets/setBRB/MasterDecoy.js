"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterDecoy extends UnimplementedCard {
  constructor(game) {
    super(game, "Master Decoy", "Battle Royale Box Set", "BRB");
  }
}

module.exports = MasterDecoy;
