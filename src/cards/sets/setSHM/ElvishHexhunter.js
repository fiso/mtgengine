"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishHexhunter extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Hexhunter", "Shadowmoor", "SHM");
  }
}

module.exports = ElvishHexhunter;
