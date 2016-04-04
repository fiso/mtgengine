"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WerewolfRansacker extends Card {
  constructor(game) {
    super(game, "Werewolf Ransacker", "Dark Ascension", "DKA");
  }
}

module.exports = WerewolfRansacker;
