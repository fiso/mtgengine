"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RummagingGoblin extends UnimplementedCard {
  constructor (game) {
    super(game, "Rummaging Goblin", "Ixalan", "XLN");
  }
}

module.exports = RummagingGoblin;
