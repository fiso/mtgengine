"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Gravedigger extends Card {
  constructor(game) {
    super(game, "Gravedigger", "Beatdown Box Set", "BTD");
  }
}

module.exports = Gravedigger;
