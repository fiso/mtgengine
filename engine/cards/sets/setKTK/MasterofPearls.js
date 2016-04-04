"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MasterofPearls extends Card {
  constructor(game) {
    super(game, "Master of Pearls", "Khans of Tarkir", "KTK");
  }
}

module.exports = MasterofPearls;
