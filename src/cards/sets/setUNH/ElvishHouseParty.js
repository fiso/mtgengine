"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishHouseParty extends UnimplementedCard {
  constructor(game) {
    super(game, "Elvish House Party", "Unhinged", "UNH");
  }
}

module.exports = ElvishHouseParty;
