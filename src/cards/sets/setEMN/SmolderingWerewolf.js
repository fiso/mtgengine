"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SmolderingWerewolf extends UnimplementedCard {
  constructor (game) {
    super(game, "Smoldering Werewolf", "Eldritch Moon", "EMN");
  }
}

module.exports = SmolderingWerewolf;
