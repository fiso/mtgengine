"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeechBonder extends UnimplementedCard {
  constructor(game) {
    super(game, "Leech Bonder", "Shadowmoor", "SHM");
  }
}

module.exports = LeechBonder;
