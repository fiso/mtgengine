"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SmokeTeller extends Card {
  constructor(game) {
    super(game, "Smoke Teller", "Khans of Tarkir", "KTK");
  }
}

module.exports = SmokeTeller;
