"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CreatureGuy extends UnimplementedCard {
  constructor(game) {
    super(game, "Creature Guy", "Unhinged", "UNH");
  }
}

module.exports = CreatureGuy;
