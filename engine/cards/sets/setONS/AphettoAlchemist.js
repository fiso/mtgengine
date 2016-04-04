"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AphettoAlchemist extends Card {
  constructor(game) {
    super(game, "Aphetto Alchemist", "Onslaught", "ONS");
  }
}

module.exports = AphettoAlchemist;
