"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HauntedDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Haunted Dead", "Eldritch Moon", "EMN");
  }
}

module.exports = HauntedDead;
