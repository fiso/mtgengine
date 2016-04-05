"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeeperoftheSacredWord extends UnimplementedCard {
  constructor(game) {
    super(game, "Keeper of the Sacred Word", "Unhinged", "UNH");
  }
}

module.exports = KeeperoftheSacredWord;
