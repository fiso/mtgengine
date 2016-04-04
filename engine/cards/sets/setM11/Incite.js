"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Incite extends Card {
  constructor(game) {
    super(game, "Incite", "Magic 2011", "M11");
  }
}

module.exports = Incite;
