"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindlockOrb extends UnimplementedCard {
  constructor(game) {
    super(game, "Mindlock Orb", "Shards of Alara", "ALA");
  }
}

module.exports = MindlockOrb;
