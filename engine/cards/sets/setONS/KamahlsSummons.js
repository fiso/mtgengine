"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KamahlsSummons extends Card {
  constructor(game) {
    super(game, "Kamahl's Summons", "Onslaught", "ONS");
  }
}

module.exports = KamahlsSummons;
