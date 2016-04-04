"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NullChampion extends Card {
  constructor(game) {
    super(game, "Null Champion", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = NullChampion;
