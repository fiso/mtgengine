"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodcrazedGoblin extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloodcrazed Goblin", "Magic 2011", "M11");
  }
}

module.exports = BloodcrazedGoblin;
