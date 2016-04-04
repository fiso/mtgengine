"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeadlyWanderings extends Card {
  constructor(game) {
    super(game, "Deadly Wanderings", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DeadlyWanderings;
