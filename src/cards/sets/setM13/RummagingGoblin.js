"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RummagingGoblin extends UnimplementedCard {
  constructor (game) {
    super(game, "Rummaging Goblin", "Magic 2013", "M13");
  }
}

module.exports = RummagingGoblin;
