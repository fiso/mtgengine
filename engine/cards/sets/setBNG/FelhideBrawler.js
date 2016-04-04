"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FelhideBrawler extends Card {
  constructor(game) {
    super(game, "Felhide Brawler", "Born of the Gods", "BNG");
  }
}

module.exports = FelhideBrawler;
