"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lifeblood extends UnimplementedCard {
  constructor(game) {
    super(game, "Lifeblood", "Legends", "LEG");
  }
}

module.exports = Lifeblood;
