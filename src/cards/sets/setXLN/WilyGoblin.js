"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WilyGoblin extends UnimplementedCard {
  constructor (game) {
    super(game, "Wily Goblin", "Ixalan", "XLN");
  }
}

module.exports = WilyGoblin;
