"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadeyeBrawler extends UnimplementedCard {
  constructor (game) {
    super(game, "Deadeye Brawler", "Rivals of Ixalan", "RIX");
  }
}

module.exports = DeadeyeBrawler;
