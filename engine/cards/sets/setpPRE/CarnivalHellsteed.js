"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarnivalHellsteed extends UnimplementedCard {
  constructor(game) {
    super(game, "Carnival Hellsteed", "Prerelease Events", "pPRE");
  }
}

module.exports = CarnivalHellsteed;
