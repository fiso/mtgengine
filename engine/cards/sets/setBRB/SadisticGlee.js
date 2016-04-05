"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SadisticGlee extends UnimplementedCard {
  constructor(game) {
    super(game, "Sadistic Glee", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SadisticGlee;
