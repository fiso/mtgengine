"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LoamDweller extends Card {
  constructor(game) {
    super(game, "Loam Dweller", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = LoamDweller;
