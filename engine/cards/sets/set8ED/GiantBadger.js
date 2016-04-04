"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiantBadger extends Card {
  constructor(game) {
    super(game, "Giant Badger", "Eighth Edition", "8ED");
  }
}

module.exports = GiantBadger;
