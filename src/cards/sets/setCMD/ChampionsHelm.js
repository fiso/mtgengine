"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChampionsHelm extends UnimplementedCard {
  constructor (game) {
    super(game, "Champion's Helm", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ChampionsHelm;
