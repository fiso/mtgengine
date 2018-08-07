"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinSlingshot extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Slingshot", "Unstable", "UST");
  }
}

module.exports = GoblinSlingshot;
