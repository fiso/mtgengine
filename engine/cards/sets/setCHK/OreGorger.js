"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OreGorger extends Card {
  constructor(game) {
    super(game, "Ore Gorger", "Champions of Kamigawa", "CHK");
  }
}

module.exports = OreGorger;
