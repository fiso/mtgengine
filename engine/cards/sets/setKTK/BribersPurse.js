"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BribersPurse extends Card {
  constructor(game) {
    super(game, "Briber's Purse", "Khans of Tarkir", "KTK");
  }
}

module.exports = BribersPurse;
