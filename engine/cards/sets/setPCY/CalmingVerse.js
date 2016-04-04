"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalmingVerse extends UnimplementedCard {
  constructor(game) {
    super(game, "Calming Verse", "Prophecy", "PCY");
  }
}

module.exports = CalmingVerse;
