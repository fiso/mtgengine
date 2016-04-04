"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FarrelitePriest extends Card {
  constructor(game) {
    super(game, "Farrelite Priest", "Fallen Empires", "FEM");
  }
}

module.exports = FarrelitePriest;
