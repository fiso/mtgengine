"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorpseBlockade extends UnimplementedCard {
  constructor(game) {
    super(game, "Corpse Blockade", "Gatecrash", "GTC");
  }
}

module.exports = CorpseBlockade;
