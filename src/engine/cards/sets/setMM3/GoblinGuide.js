"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinGuide extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Guide", "Modern Masters 2017", "MM3");
  }
}

module.exports = GoblinGuide;
