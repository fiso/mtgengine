"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilverpeltWerewolf extends UnimplementedCard {
  constructor(game) {
    super(game, "Silverpelt Werewolf", "Dark Ascension", "DKA");
  }
}

module.exports = SilverpeltWerewolf;
