"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Drowned extends Card {
  constructor(game) {
    super(game, "Drowned", "Masters Edition IV", "ME4");
  }
}

module.exports = Drowned;
