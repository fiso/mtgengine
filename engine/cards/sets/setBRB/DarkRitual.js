"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkRitual extends UnimplementedCard {
  constructor(game) {
    super(game, "Dark Ritual", "Battle Royale Box Set", "BRB");
  }
}

module.exports = DarkRitual;
