"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RushofBattle extends Card {
  constructor(game) {
    super(game, "Rush of Battle", "Khans of Tarkir", "KTK");
  }
}

module.exports = RushofBattle;
