"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoonscarredWerewolf extends UnimplementedCard {
  constructor(game) {
    super(game, "Moonscarred Werewolf", "Dark Ascension", "DKA");
  }
}

module.exports = MoonscarredWerewolf;
