"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinBrawler extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Brawler", "Fifth Dawn", "5DN");
  }
}

module.exports = GoblinBrawler;
