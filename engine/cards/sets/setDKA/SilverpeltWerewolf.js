"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SilverpeltWerewolf extends Card {
  constructor(game) {
    super(game, "Silverpelt Werewolf", "Dark Ascension", "DKA");
  }
}

module.exports = SilverpeltWerewolf;
