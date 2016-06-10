"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WerewolfRansacker extends UnimplementedCard {
  constructor (game) {
    super(game, "Werewolf Ransacker", "Dark Ascension", "DKA");
  }
}

module.exports = WerewolfRansacker;
