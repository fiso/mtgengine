"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrazedGoblin extends UnimplementedCard {
  constructor (game) {
    super(game, "Crazed Goblin", "Darksteel", "DST");
  }
}

module.exports = CrazedGoblin;
