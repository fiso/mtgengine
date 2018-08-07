"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoreSeeker extends UnimplementedCard {
  constructor (game) {
    super(game, "Lore Seeker", "Conspiracy", "CNS");
  }
}

module.exports = LoreSeeker;
